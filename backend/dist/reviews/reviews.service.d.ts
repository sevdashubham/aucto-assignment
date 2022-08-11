import { Review } from './review.model';
export declare class ReviewsService {
    private readonly booksService;
    private reviews;
    insertReview(rating: number, reviewText: string, bookId: string): any;
    getReviewsByBookId(bookId: any): Review[];
    getAverageRatingByBookId(bookId: any): number;
    getSingleReview(reviewId: string): {
        id: string;
        bookId: string;
        rating: number;
        reviewText: string;
    };
    private findReview;
}
