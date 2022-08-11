import { IsNotEmpty, IsString, IsOptional, IsNumber } from 'class-validator';

export class ReviewRouteDto {
  @IsString()
  @IsNotEmpty({message: 'The Review should have book id'})
  bookId: string;

  @IsNumber()
  @IsNotEmpty()
  rating: number;

  @IsString()
  @IsNotEmpty()
  reviewText: string;
}
