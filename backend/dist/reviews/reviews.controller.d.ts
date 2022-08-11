import { ReviewsService } from './reviews.service';
import { ReviewRouteDto } from './review.dto';
export declare class ReviewsController {
    private readonly reviewsService;
    constructor(reviewsService: ReviewsService);
    addReview(reviewDto: ReviewRouteDto): {
        id: any;
    };
    getBook(bookId: string): import("./review.model").Review[];
}
