import {
  Controller,
  Post,
  Body,
  Get,
  Param, UsePipes, ValidationPipe,
} from '@nestjs/common';

import { AuthorsService } from './authors.service';
import { AuthorRouteDto } from './author.dto';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Post()
  @UsePipes(ValidationPipe)
  addAuthor(
    @Body() authorDto: AuthorRouteDto,
  ) {
    const { name } = authorDto;
    const generatedId = this.authorsService.insertAuthor(
      name,
    );
    return { id: generatedId };
  }

  @Get()
  async getAllAuthors() {
    return this.authorsService.getAuthors();
  }

  @Get(':id')
  getAuthor(@Param('id') authorId: string) {
    return this.authorsService.getSingleAuthor(authorId);
  }
}
