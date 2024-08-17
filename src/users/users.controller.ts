import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Body,
  ParseIntPipe,
  DefaultValuePipe,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user-dto';

@Controller('users')
export class UsersController {
  @Get('/:id?')
  public getUsers(
    @Param('id', ParseIntPipe) id: number | undefined,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    return 'You sent a get request to users endpoint';
  }
  @Post()
  public createdUsers(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);

    return 'You sent a post request to users endpoint';
  }
}
