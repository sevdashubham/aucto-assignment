import { Module } from '@nestjs/common';

import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { AuthorsModule } from '../authors/authors.module';

@Module({
  imports: [AuthorsModule],
  controllers: [BooksController],
  providers: [BooksService],
})

export class BooksModule{}
