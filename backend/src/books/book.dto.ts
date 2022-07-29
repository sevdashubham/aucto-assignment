import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class BookRouteDto {
  @IsString()
  @IsNotEmpty({message: 'The book should have a name!'})
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsNotEmpty()
  authorId: string;
}
