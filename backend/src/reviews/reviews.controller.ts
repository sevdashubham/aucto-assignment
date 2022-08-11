import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  UsePipes, ValidationPipe,
} from '@nestjs/common';

import { ReviewsService } from './reviews.service';
import { ReviewRouteDto } from './review.dto';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  addReview(
    @Body() reviewDto: ReviewRouteDto,
  ) {
    const { rating, reviewText, bookId } = reviewDto;
    const generatedId = this.reviewsService.insertReview(
      rating,
      reviewText,
      bookId,
    );
    return { id: generatedId };
  }

  @Get(':id')
  getBook(@Param('id') bookId: string) {
    return this.reviewsService.getReviewsByBookId(bookId);
  }
}
