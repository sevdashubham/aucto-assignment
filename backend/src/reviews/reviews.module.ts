import { Module, forwardRef } from '@nestjs/common';

import { ReviewsController } from './reviews.controller';
import { ReviewsService } from './reviews.service';
import { BooksModule } from '../books/books.module';

@Module({
  imports: [forwardRef(() => BooksModule),],
  controllers: [ReviewsController],
  providers: [ReviewsService],
  exports: [ReviewsService]
})

export class ReviewsModule{}
