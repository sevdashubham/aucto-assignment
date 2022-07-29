import { OnModuleInit } from '@nestjs/common';
import { Author } from './author.model';
export declare class AuthorsService implements OnModuleInit {
    private authors;
    onModuleInit(): void;
    insertAuthor(name: string): any;
    getAuthors(): Author[];
    getSingleAuthor(authorId: string): {
        id: string;
        name: string;
    };
    seedData(): Promise<void>;
    private findAuthor;
}
