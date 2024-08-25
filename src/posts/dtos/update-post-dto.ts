import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';
import { CreatePostDTO } from './create-post-dto';

export class UpdatePostDTO extends PartialType(CreatePostDTO) {
  @ApiProperty({
    description: 'Post id',
  })
  @IsInt()
  @IsNotEmpty()
  id: number;
}
