import { OnModuleInit } from '@nestjs/common';
import { Review } from '../reviews/review.model';
export declare class BooksService implements OnModuleInit {
    private readonly authorsService;
    private readonly reviewsService;
    private books;
    onModuleInit(): void;
    insertBook(title: string, desc: string, authorId: string): any;
    getBooks(): {
        avgRating: number;
        id: string;
        name: string;
        description: string;
        authorId: string;
    }[];
    getSingleBook(bookId: string): {
        review: Review[];
        id: string;
        name: string;
        description: string;
        authorId: string;
    };
    deleteBook(bookId: string): void;
    seedData(): Promise<void>;
    private findBook;
}
