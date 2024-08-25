import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDTO } from './dtos/create-post-dto';
import { UpdatePostDTO } from './dtos/update-post-dto';

@Controller('posts')
@ApiTags('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('/:userId?')
  public getPosts(@Param('userId') userId: string) {
    return this.postsService.findAll(userId);
  }

  @ApiOperation({ summary: 'Create a new post' })
  @Post()
  @ApiResponse({
    status: 201,
    description: 'The post has been created successfully.',
  })
  public createPost(@Body() createPostDTO: CreatePostDTO) {
    console.log(createPostDTO);
  }

  @ApiOperation({ summary: 'update a post' })
  @Patch()
  @ApiResponse({
    status: 201,
    description: 'The post has been updated successfully.',
  })
  public updatePost(@Body() updatePostDTO: UpdatePostDTO) {
    console.log(updatePostDTO);
  }
}
