import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatModule } from './cats/cat.module';
import { DatabaseModule } from './db/database.module';

@Module({
  imports: [CatModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
