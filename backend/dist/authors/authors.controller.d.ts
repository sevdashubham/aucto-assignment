import { AuthorsService } from './authors.service';
import { AuthorRouteDto } from './author.dto';
export declare class AuthorsController {
    private readonly authorsService;
    constructor(authorsService: AuthorsService);
    addAuthor(authorDto: AuthorRouteDto): {
        id: any;
    };
    getAllAuthors(): Promise<import("./author.model").Author[]>;
    getAuthor(authorId: string): {
        id: string;
        name: string;
    };
}
