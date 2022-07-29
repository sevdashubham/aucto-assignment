"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorsService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const author_model_1 = require("./author.model");
let AuthorsService = class AuthorsService {
    constructor() {
        this.authors = [];
    }
    onModuleInit() {
        this.seedData();
    }
    insertAuthor(name) {
        const authorId = (0, uuid_1.v4)();
        const newAuthor = new author_model_1.Author(authorId, name);
        this.authors.push(newAuthor);
        return authorId;
    }
    getAuthors() {
        return [...this.authors];
    }
    getSingleAuthor(authorId) {
        const book = this.findAuthor(authorId)[0];
        return Object.assign({}, book);
    }
    async seedData() {
        const response = await fetch('http://www.mocky.io/v2/5e1684a93000002c00d5608e');
        const data = await response.json();
        data.forEach((author) => {
            const newAuthor = new author_model_1.Author(`${author.id}`, author.name);
            this.authors.push(newAuthor);
        });
    }
    findAuthor(id) {
        const authorIndex = this.authors.findIndex(auth => auth.id === id);
        const author = this.authors[authorIndex];
        if (!author) {
            throw new common_1.NotFoundException('Could not find author.');
        }
        return [author, authorIndex];
    }
};
AuthorsService = __decorate([
    (0, common_1.Injectable)()
], AuthorsService);
exports.AuthorsService = AuthorsService;
//# sourceMappingURL=authors.service.js.map