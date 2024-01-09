import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Course } from './schemas/course.schema';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) { }

  @Post()
  async create(@Body() course: Course): Promise<Course> {
    return await this.coursesService.create(course);
  }

  @Get()
  async findAll(): Promise<Course[]> {
    return await this.coursesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Course> {
    return await this.coursesService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() course: Course): Promise<Course> {
    return await this.coursesService.update(id, course);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.coursesService.remove(id);
  // }
}
