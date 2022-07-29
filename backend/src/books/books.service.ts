import { Inject, Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Book } from './book.model';
import { AuthorsService } from '../authors/authors.service';

@Injectable()
export class BooksService implements OnModuleInit {
  @Inject(AuthorsService)
  private readonly authorsService: AuthorsService;
  private books: Book[] = [];

  onModuleInit() {
    this.seedData();
  }

  insertBook(title: string, desc: string, authorId: string) {
    const author = this.authorsService.getSingleAuthor(authorId);
    if (!author) {
      throw new NotFoundException('Could not find Author');
    }
    const bookId = uuidv4();
    const newBook = new Book(bookId, title, desc, authorId);
    this.books.push(newBook);
    return bookId;
  }

  getBooks() {
    return [...this.books];
  }

  getSingleBook(bookId: string) {
    const book = this.findBook(bookId)[0];
    return { ...book };
  }

  deleteBook(bookId: string) {
    const index = this.findBook(bookId)[1];
    this.books.splice(index, 1);
  }

  async seedData() {
    const response = await fetch('http://www.mocky.io/v2/5e1683a23000004d00d56089');
    const data = await response.json();
    data.forEach((book) => {
      const bookId = uuidv4();
      const { title, description, authorId } = book;
      const newBook = new Book(bookId, title, description, `${authorId}`);
      this.books.push(newBook);
    });
  }

  private findBook(id: string): [Book, number] {
    const bookIndex = this.books.findIndex(book => book.id === id);
    const book = this.books[bookIndex];
    if (!book) {
      throw new NotFoundException('Could not find book.');
    }
    return [book, bookIndex];
  }
}
