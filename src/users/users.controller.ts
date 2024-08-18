import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Body,
  ParseIntPipe,
  DefaultValuePipe,
  Patch,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user-dto';
import { GetUsersParamDto } from './dtos/get-users-param-dot';
import { PatchUserDto } from './dtos/patch-user-dto';
import { UsersService } from './providers/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/:id?')
  public getUsers(
    @Param() getUsersParamDto: GetUsersParamDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    return this.usersService.findAll(getUsersParamDto, limit, page);
  }
  @Post()
  public createdUsers(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);

    return 'You sent a post request to users endpoint';
  }

  @Patch()
  public patchUser(@Body() pathUserDto: PatchUserDto) {
    return pathUserDto;
  }
}
