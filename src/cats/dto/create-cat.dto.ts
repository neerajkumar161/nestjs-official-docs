import { Optional } from '@nestjs/common';
import { IsInt, IsString } from 'class-validator';

export class CreateCatDto {
  @IsInt()
  id: number;

  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsString()
  breed: string;

  @IsString()
  @Optional()
  password: string;
}
