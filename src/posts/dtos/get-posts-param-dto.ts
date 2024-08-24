import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsString } from 'class-validator';

export class GetPostsParamDto {
  @ApiProperty({
    description: 'Get posts by specific userId',
    example: 1234,
  })
  @IsString()
  @Type(() => String)
  userId: string;
}
