import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

@Schema()
export class Course {
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop()
  image: string;

  @Prop()
  videoId: string;

  @Prop({ required: true, unique: true })
  slug: string;

  @Prop({ default: false })
  deleted: boolean;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;

}

export const CourseSchema = SchemaFactory.createForClass(Course);
