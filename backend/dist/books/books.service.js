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
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const book_model_1 = require("./book.model");
const authors_service_1 = require("../authors/authors.service");
const reviews_service_1 = require("../reviews/reviews.service");
let BooksService = class BooksService {
    constructor() {
        this.books = [];
    }
    onModuleInit() {
        this.seedData();
    }
    insertBook(title, desc, authorId) {
        const author = this.authorsService.getSingleAuthor(authorId);
        if (!author) {
            throw new common_1.NotFoundException('Could not find Author');
        }
        const bookId = (0, uuid_1.v4)();
        const newBook = new book_model_1.Book(bookId, title, desc, authorId);
        this.books.push(newBook);
        return bookId;
    }
    getBooks() {
        return this.books.map(book => {
            const average = this.reviewsService.getAverageRatingByBookId(book.id);
            return Object.assign(Object.assign({}, book), { avgRating: average ? average : 0 });
        });
    }
    getSingleBook(bookId) {
        const book = this.findBook(bookId)[0];
        const review = this.findBook(bookId)[1];
        return Object.assign(Object.assign({}, book), { review });
    }
    deleteBook(bookId) {
        const index = this.findBook(bookId)[2];
        this.books.splice(index, 1);
    }
    async seedData() {
        const response = await fetch('http://www.mocky.io/v2/5e1683a23000004d00d56089');
        const data = await response.json();
        data.forEach((book) => {
            const bookId = (0, uuid_1.v4)();
            const { title, description, authorId } = book;
            const newBook = new book_model_1.Book(bookId, title, description, `${authorId}`);
            this.books.push(newBook);
        });
    }
    findBook(id) {
        const bookIndex = this.books.findIndex(book => book.id === id);
        const book = this.books[bookIndex];
        const review = this.reviewsService.getReviewsByBookId(id);
        if (!book) {
            throw new common_1.NotFoundException('Could not find book.');
        }
        return [book, review, bookIndex];
    }
};
__decorate([
    (0, common_1.Inject)(authors_service_1.AuthorsService),
    __metadata("design:type", authors_service_1.AuthorsService)
], BooksService.prototype, "authorsService", void 0);
__decorate([
    (0, common_1.Inject)((0, common_1.forwardRef)(() => reviews_service_1.ReviewsService)),
    __metadata("design:type", reviews_service_1.ReviewsService)
], BooksService.prototype, "reviewsService", void 0);
BooksService = __decorate([
    (0, common_1.Injectable)()
], BooksService);
exports.BooksService = BooksService;
//# sourceMappingURL=books.service.js.map