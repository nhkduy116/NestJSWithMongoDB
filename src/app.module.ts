import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/blog_dev'), CoursesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
