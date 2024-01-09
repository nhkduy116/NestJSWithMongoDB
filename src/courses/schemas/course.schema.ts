import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Course {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  image: string;

  @Prop()
  videoId: string;

  @Prop()
  slug: string;

}

export const CourseSchema = SchemaFactory.createForClass(Course);
