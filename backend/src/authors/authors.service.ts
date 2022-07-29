import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import {v4 as uuidv4} from 'uuid';
import { Author } from './author.model';

@Injectable()
export class AuthorsService implements OnModuleInit {
  private authors: Author[] = [];

  onModuleInit() {
    this.seedData();
  }

  insertAuthor(name: string) {
    const authorId = uuidv4();
    const newAuthor = new Author(authorId, name);
    this.authors.push(newAuthor);
    return authorId;
  }

  getAuthors() {
    return [...this.authors];
  }

  getSingleAuthor(authorId: string) {
    const book = this.findAuthor(authorId)[0];
    return { ...book };
  }

  async seedData() {
    const response = await fetch('http://www.mocky.io/v2/5e1684a93000002c00d5608e');
    const data = await response.json();
    data.forEach((author) => {
      const newAuthor = new Author(`${author.id}`, author.name);
      this.authors.push(newAuthor);
    });
  }

  private findAuthor(id: string): [Author, number] {
    const authorIndex = this.authors.findIndex(auth => auth.id === id);
    const author = this.authors[authorIndex];
    if (!author) {
      throw new NotFoundException('Could not find author.');
    }
    return [author, authorIndex];
  }
}
