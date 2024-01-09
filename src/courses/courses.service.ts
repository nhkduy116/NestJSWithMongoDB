import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Course } from './schemas/course.schema';
import { Model, Types } from 'mongoose';

@Injectable()
export class CoursesService {
  constructor(@InjectModel(Course.name) private readonly courseModel: Model<Course>) { }

  async create(createCourseDto: CreateCourseDto) {
    const createdCourse = await this.courseModel.create(createCourseDto);
    return createdCourse;
    // return createdCourse ? { message: 'Created successfully' } : { message: 'Created failed' };
  }

  async findAll(): Promise<Course[]> {
    return await this.courseModel.find().exec();
  }

  async findOne(id: string): Promise<Course> {
    return await this.courseModel.findById(id).exec();
  }

  async update(id: string, course: Course): Promise<Course> {
    return await this.courseModel.findByIdAndUpdate(id, course, { new: true });
  }

  async delete(id: string) {
    const deletedCat = await this.courseModel.findByIdAndDelete(id).exec();
    return deletedCat ? { message: 'Deleted successfully' } : { message: 'Deleted failed' };
  }
}
