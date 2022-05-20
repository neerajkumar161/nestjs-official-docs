import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat, CatDocument } from '../schema/cat.schema';

interface EnvVariables {
  port: string;
  database: {
    url: string;
  };
}
@Injectable()
export class CatsService {
  constructor(
    @InjectModel(Cat.name) private catModel: Model<CatDocument>,
    private configService: ConfigService<EnvVariables, true>,
  ) {}

  async create(cat: Cat) {
    console.log(cat);
    const createdCat = new this.catModel(cat);
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    const url = this.configService.get('database.url', { infer: true });
    console.log('Url', url);
    return await this.catModel.find().lean();
  }

  async findOne(id: string): Promise<Cat | null> {
    const cat = await this.catModel.findOne({ _id: id }).lean();
    if (!cat) return null;
    return cat;
  }
}
