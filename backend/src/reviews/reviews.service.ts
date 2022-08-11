import { forwardRef, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Review } from './review.model';
import { BooksService } from '../books/books.service';

@Injectable()
export class ReviewsService {
  @Inject(forwardRef(() => BooksService))
  private readonly booksService: BooksService;
  private reviews: Review[] = [];

  insertReview(rating: number, reviewText: string, bookId: string) {
    const book = this.booksService.getSingleBook(bookId);
    if (!book) {
      throw new NotFoundException('Could not find Book');
    }
    const reviewId = uuidv4();
    const newReview = new Review(reviewId, bookId, rating, reviewText);
    this.reviews.push(newReview);
    return reviewId;
  }

  getReviewsByBookId(bookId) {
    return this.reviews.filter(review => review.bookId === bookId);
  }

  getAverageRatingByBookId(bookId) {
    return this.reviews.reduce((total, next) => total + next.rating, 0) / this.reviews.length;
  }

  getSingleReview(reviewId: string) {
    const review = this.findReview(reviewId)[0];
    return { ...review };
  }

  private findReview(id: string): [Review, number] {
    const reviewIndex = this.reviews.findIndex(review => review.id === id);
    const review = this.reviews[reviewIndex];
    if (!review) {
      throw new NotFoundException('Could not find review.');
    }
    return [review, reviewIndex];
  }
}
