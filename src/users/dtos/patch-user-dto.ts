import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user-dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class PatchUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({
    description: 'User id',
  })
  @IsString()
  @IsNotEmpty()
  userId: string;
}
