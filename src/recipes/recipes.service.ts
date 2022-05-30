import { Injectable } from '@nestjs/common'
import { CreateRecipeDto } from './dto/create-recipe.dto'
import { Recipe } from './models/recipe.model'

@Injectable()
export class RecipesService {
  private readonly recipes: Recipe[] = [
    {
      id: 1,
      title: 'Recipe #1',
      description: 'Recipe #1 Description',
      createdAt: new Date(),
      ingredients: ['A', 'B']
    },
    {
      id: 2,
      title: 'Recipe #2',
      description: 'Recipe #2 Description',
      createdAt: new Date(),
      ingredients: ['C', 'D']
    },
    {
      id: 3,
      title: 'Recipe #3',
      description: 'Recipe #3 Description',
      createdAt: new Date(),
      ingredients: ['E', 'F']
    }
  ]

  async add(recipe: CreateRecipeDto): Promise<Recipe> {
    const newRecipe = {
      id: this.recipes.length + 1,
      createdAt: new Date(),
      ...recipe
    }

    this.recipes.push(newRecipe)
    return newRecipe
  }

  async findAll(): Promise<Recipe[]> {
    return this.recipes
  }

  async findById(recipeId: number): Promise<Recipe | null> {
    return this.recipes.find((el) => el.id === recipeId)
  }
}
