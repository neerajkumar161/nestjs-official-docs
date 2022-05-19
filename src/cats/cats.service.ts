import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Cat, CatDocument } from '../schema/cat.schema';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}

  async create(cat: Cat) {
    console.log(cat);
    const createdCat = new this.catModel(cat);
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return await this.catModel.find().lean();
  }

  async findOne(id: ObjectId): Promise<Cat | null> {
    const cat = await this.catModel.findOne({ _id: id }).lean();
    if (!cat) return null;
    return cat;
  }
}
