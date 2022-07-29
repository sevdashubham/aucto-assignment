import { OnModuleInit } from '@nestjs/common';
import { Book } from './book.model';
export declare class BooksService implements OnModuleInit {
    private readonly authorsService;
    private books;
    onModuleInit(): void;
    insertBook(title: string, desc: string, authorId: string): any;
    getBooks(): Book[];
    getSingleBook(bookId: string): {
        id: string;
        name: string;
        description: string;
        authorId: string;
    };
    deleteBook(bookId: string): void;
    seedData(): Promise<void>;
    private findBook;
}
