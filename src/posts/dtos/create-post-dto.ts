import {
  IsArray,
  IsEnum,
  IsISO8601,
  IsJSON,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  MaxLength,
  ValidateNested,
} from 'class-validator';

import { Type } from 'class-transformer';

import { PostType } from '../enums/postType';
import { Status } from '../enums/status';
import { CreatePostMetaOptionsDTO } from './create-post-metaOptions-dto';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePostDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'A title for the post',
    example: 'My post',
  })
  @MaxLength(512)
  title: string;

  @ApiProperty({
    enum: PostType,
    description: 'The type of the post, eg. post, page, story, series',
  })
  @IsEnum(PostType)
  @IsNotEmpty()
  postType: PostType;

  @ApiProperty({
    description: 'The slug of the post, eg. my-url',
    example: 'my-url',
  })
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message:
      'A slug should be all small letters and uses only "-" and without spaces. For example "my-url"',
  })
  @MaxLength(256)
  slug: string;

  @ApiProperty({
    enum: Status,
    description:
      'The status of the post, eg. published, draft, review, scheduled',
  })
  @IsEnum(Status)
  status: Status;

  @ApiPropertyOptional({
    description: 'The content of the post',
    example: 'This is my post',
  })
  @IsOptional()
  @IsString()
  content?: string;

  @ApiPropertyOptional({
    description: 'The schema of the post',
    example:
      '{\r\n    "@context": "https://schema.org",\r\n    "@type": "Person"\r\n  }',
  })
  @IsOptional()
  @IsJSON()
  schema?: string;

  @ApiPropertyOptional({
    description: 'The image url of the post',
    example: 'https://example.com/image.png',
  })
  @IsOptional()
  @IsUrl()
  @MaxLength(1024)
  featuredImageUrl: string;

  @ApiPropertyOptional({
    description: 'The publish date of the post',
    example: '2022-01-01T00:00:00.000Z',
  })
  @IsISO8601()
  @IsOptional()
  publishOn?: Date;

  @ApiPropertyOptional({
    type: 'array',
    description: 'The array of tags for the post',
    example: ['nestJS', 'typescript'],
  })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];

  @ApiPropertyOptional({
    type: 'array',
    required: false,
    items: {
      type: 'object',
      properties: {
        key: { type: 'string' },
        value: { type: 'string' },
      },
    },
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePostMetaOptionsDTO)
  metaOptions?: CreatePostMetaOptionsDTO[];
}
