import { IsNotEmpty, IsString } from 'class-validator';

export class AuthorRouteDto {
  @IsString()
  @IsNotEmpty({message: 'The Author should have a name!'})
  name: string;
}
