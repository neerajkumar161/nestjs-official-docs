import { IsArray, IsString } from 'class-validator';

export class CreateRecipeDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsArray()
  ingredients: string[];
}
