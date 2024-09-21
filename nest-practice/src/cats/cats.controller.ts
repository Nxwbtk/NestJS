import {
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { CatService } from './cat.service';
import { Cat } from './cat.entity';

type TGetCatsResponse = {
  name: string;
  age: number;
}[];

type TCreateCatResponse = {
  message: string;
};

@Controller('cats')
export class CatsController {
  // constructor(private readonly catService: CatService) {}
  constructor(private catService: CatService) {}
  @Get()
  @HttpCode(200)
  getCats(): Promise<Cat[]> {
    return this.catService.findAll();
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

  @Get('docs')
  getDocs(@Query('version') version) {
    return { version: version };
  }
  @Get('/doc/:id')
  findOne(@Param() params: any): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }

  @Get('/doc1/:id')
  findOneWithDirectRef(@Param('id') id: string): string {
    console.log(id);
    return `This action returns a #${id} cat`;
  }
  // https://docs.nestjs.com/controllers#route-wildcards:~:text=scopes%20here.-,Asynchronicity,-%23
}
