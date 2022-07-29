import { BooksService } from './books.service';
import { BookRouteDto } from './book.dto';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    addProduct(bookDto: BookRouteDto): {
        id: any;
    };
    getAllBooks(): Promise<import("./book.model").Book[]>;
    getBook(bookId: string): {
        id: string;
        name: string;
        description: string;
        authorId: string;
    };
    removeBook(bookId: string): any;
}
