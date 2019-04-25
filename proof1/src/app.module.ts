import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsExampleController } from './cats/catsExamples.controller';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [],
  controllers: [AppController, CatsExampleController, CatsController],
  providers: [AppService],
})
export class AppModule {}
