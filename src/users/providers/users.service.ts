import { Injectable } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param-dot';
import { UserEntity } from '../user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dtos/create-user-dto';

@Injectable()
export class UsersService {
  constructor(
    // 注入 UserEntity 的 Repository
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}
  public async createUser(createUserDto: CreateUserDto) {
    //Check if user already exists with same email
    const existingUser = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });
    //Handle exception
    //Create a new user
    let newUser = this.userRepository.create(createUserDto);
    newUser = await this.userRepository.save(newUser);

    return newUser;
  }

  public findAll(
    getUsersParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    return [
      {
        firstName: 'Fatty',
        email: 'cvcvbnbn@gmail.com',
      },
      {
        firstName: 'Shau',
        email: 'cvcv13@gmail.com',
      },
    ];
  }

  public findOneById(id: string) {
    return {
      id: id,
      firstName: 'Shau',
      email: 'cvcv13@gmail.com',
    };
  }
}
