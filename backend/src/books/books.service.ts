import { forwardRef, Inject, Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Book } from './book.model';
import { AuthorsService } from '../authors/authors.service';
import { ReviewsService } from '../reviews/reviews.service';
import { Review } from '../reviews/review.model';

@Injectable()
export class BooksService implements OnModuleInit {
  @Inject(AuthorsService)
  private readonly authorsService: AuthorsService;
  @Inject(forwardRef(() => ReviewsService))
  private readonly reviewsService: ReviewsService;
  private books: Book[] = [];

  onModuleInit() {
    this.seedData();
  }

  insertBook(title: string, desc: string, authorId: string) {
    const author = this.authorsService.getSingleAuthor(authorId);
    if (!author) {
      throw new NotFoundException('Could not find Author');
    }
    const bookId = uuidv4();
    const newBook = new Book(bookId, title, desc, authorId);
    this.books.push(newBook);
    return bookId;
  }

  getBooks() {
    return this.books.map(book => {
      const average = this.reviewsService.getAverageRatingByBookId(book.id)
      return {
        ...book, avgRating: average ? average : 0
      }
    })
  }

  getSingleBook(bookId: string) {
    const book = this.findBook(bookId)[0];
    const review = this.findBook(bookId)[1];
    return { ...book, review };
  }

  deleteBook(bookId: string) {
    const index = this.findBook(bookId)[2];
    this.books.splice(index, 1);
  }

  async seedData() {
    const response = await fetch('http://www.mocky.io/v2/5e1683a23000004d00d56089');
    const data = await response.json();
    data.forEach((book) => {
      const bookId = uuidv4();
      const { title, description, authorId } = book;
      const newBook = new Book(bookId, title, description, `${authorId}`);
      this.books.push(newBook);
    });
  }

  private findBook(id: string): [Book, Review[], number] {
    const bookIndex = this.books.findIndex(book => book.id === id);
    const book = this.books[bookIndex];
    const review = this.reviewsService.getReviewsByBookId(id)
    if (!book) {
      throw new NotFoundException('Could not find book.');
    }
    return [book, review, bookIndex];
  }
}
