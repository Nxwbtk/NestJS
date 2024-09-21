import { Module } from "@nestjs/common";
import { CatsController } from "./cats.controller";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from "./cat.entity";
import { CatService } from "./cat.service";
import { DatabaseModule } from "src/db/database.module";
import { catProviders } from "./cat.providers";

@Module({
    imports: [DatabaseModule],
    providers: [CatService, ...catProviders],
    controllers: [CatsController],
    exports: [],
})

export class CatModule {}