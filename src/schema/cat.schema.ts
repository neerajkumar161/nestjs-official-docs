import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Exclude } from 'class-transformer'
import { Document } from 'mongoose'

export type CatDocument = Cat & Document

@Schema()
export class Cat {
  @Prop({ required: true })
  id: number
  @Prop()
  name: string
  @Prop()
  age: number

  @Prop()
  breed: string

  @Prop()
  // @Optional()
  @Exclude()
  password: string

  constructor(partial: Partial<Cat>) {
    Object.assign(this, partial)
  }
}

export const CatSchema = SchemaFactory.createForClass(Cat)

// CatSchema.pre('save', (doc: any) => {
//   console.log(doc.id);
//   console.log('Im here before saving!');
// });
