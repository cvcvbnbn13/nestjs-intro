import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {}
  public login(email: string, password: string, id: string) {
    //check user exists database
    const user = this.usersService.findOneById('123');

    return 'SMAPLE_TOKEN';
  }

  public isAuth() {
    return true;
  }
}
