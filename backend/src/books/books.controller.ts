import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete, UsePipes, ValidationPipe,
} from '@nestjs/common';

import { BooksService } from './books.service';
import { BookRouteDto } from './book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Post()
  @UsePipes(ValidationPipe)
  addProduct(
    @Body() bookDto: BookRouteDto,
  ) {
    const { name, description, authorId } = bookDto;
    const generatedId = this.booksService.insertBook(
      name,
      description,
      authorId,
    );
    return { id: generatedId };
  }

  @Get()
  async getAllBooks() {
    return this.booksService.getBooks();
  }

  @Get(':id')
  getBook(@Param('id') bookId: string) {
    return this.booksService.getSingleBook(bookId);
  }

  @Delete(':id')
  removeBook(@Param('id') bookId: string) {
    this.booksService.deleteBook(bookId);
    return null;
  }
}
