import { forwardRef, Module } from '@nestjs/common';

import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { AuthorsModule } from '../authors/authors.module';
import { ReviewsModule } from '../reviews/reviews.module';

@Module({
  imports: [AuthorsModule, forwardRef(() => ReviewsModule)],
  controllers: [BooksController],
  providers: [BooksService],
  exports: [BooksService]
})

export class BooksModule{}
