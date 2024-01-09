import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Course } from './schemas/course.schema';
import { Model, Types } from 'mongoose';

@Injectable()
export class CoursesService {
  constructor(@InjectModel('Course') private readonly courseModel: Model<Course>) { }

  async create(course: Course): Promise<Course> {
    const createdCourse = new this.courseModel(course);
    return await createdCourse.save();
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

  // async delete(id: string): Promise<Course> {
  //   const objectId = new Types.ObjectId(id); 

  //   const deletedCourse = await this.courseModel.findByIdAndDelete(objectId);

  //   if (!deletedCourse) {
  //     throw new NotFoundException('Not found course');
  //   }

  //   return deletedCourse;
  // }
}
