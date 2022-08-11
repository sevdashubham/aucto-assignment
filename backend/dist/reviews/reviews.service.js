"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const review_model_1 = require("./review.model");
const books_service_1 = require("../books/books.service");
let ReviewsService = class ReviewsService {
    constructor() {
        this.reviews = [];
    }
    insertReview(rating, reviewText, bookId) {
        const book = this.booksService.getSingleBook(bookId);
        if (!book) {
            throw new common_1.NotFoundException('Could not find Book');
        }
        const reviewId = (0, uuid_1.v4)();
        const newReview = new review_model_1.Review(reviewId, bookId, rating, reviewText);
        this.reviews.push(newReview);
        return reviewId;
    }
    getReviewsByBookId(bookId) {
        return this.reviews.filter(review => review.bookId === bookId);
    }
    getAverageRatingByBookId(bookId) {
        return this.reviews.reduce((total, next) => total + next.rating, 0) / this.reviews.length;
    }
    getSingleReview(reviewId) {
        const review = this.findReview(reviewId)[0];
        return Object.assign({}, review);
    }
    findReview(id) {
        const reviewIndex = this.reviews.findIndex(review => review.id === id);
        const review = this.reviews[reviewIndex];
        if (!review) {
            throw new common_1.NotFoundException('Could not find review.');
        }
        return [review, reviewIndex];
    }
};
__decorate([
    (0, common_1.Inject)((0, common_1.forwardRef)(() => books_service_1.BooksService)),
    __metadata("design:type", books_service_1.BooksService)
], ReviewsService.prototype, "booksService", void 0);
ReviewsService = __decorate([
    (0, common_1.Injectable)()
], ReviewsService);
exports.ReviewsService = ReviewsService;
//# sourceMappingURL=reviews.service.js.map