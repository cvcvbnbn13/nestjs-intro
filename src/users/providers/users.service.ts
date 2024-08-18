import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param-dot';
import { AuthService } from 'src/auth/providers/auth.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}
  public findAll(
    getUsersParamDto: GetUsersParamDto,
    limit: number,
    page: number,
  ) {
    const isAuth = this.authService.isAuth();
    console.log(isAuth);

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
