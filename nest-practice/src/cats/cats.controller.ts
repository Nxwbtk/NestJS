import { Controller, Get, HttpCode, Post, Req } from '@nestjs/common';

type TGetCatsResponse = {
  name: string;
  age: number;
}[];

type TCreateCatResponse = {
  message: string;
};

@Controller('cats')
export class CatsController {
  @Get()
  @HttpCode(200)
  getCats(): TGetCatsResponse {
    return [
      { name: 'Cat 1', age: 1 },
      { name: 'Cat 2', age: 2 },
      { name: 'Cat 3', age: 3 },
    ];
  }

  @Post('create')
  @HttpCode(201)
  createSample(): TCreateCatResponse {
    return { message: 'Cat created' };
  }

  @Post('create-payload')
  @HttpCode(201)
  createCat(@Req() req: Request): TCreateCatResponse {
    console.log(req.body);
    return { message: 'Cat created' };
  }
  @Get('ab*cd')
  findAll() {
    return 'This route uses a wildcard';
  }
  // https://docs.nestjs.com/controllers#route-wildcards:~:text=Returned%20values%20will%20override%20any%20arguments%20passed%20to%20the%20%40Redirect()%20decorator.%20For%20example%3A
}
