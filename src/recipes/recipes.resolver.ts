import { NotFoundException } from '@nestjs/common'
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql'
import { RecipeInput } from './dto/input-type.dto'
import { Recipe } from './models/recipe.model'
import { RecipesService } from './recipes.service'

@Resolver()
export class RecipesResolver {
  constructor(private readonly recipesService: RecipesService) {}

  @Query(() => Recipe)
  async recipe(
    @Args({ name: 'recipeId', type: () => Int }) id: number
  ): Promise<Recipe> {
    const recipe = this.recipesService.findById(id)
    if (!recipe) {
      throw new NotFoundException()
    }
    return recipe
  }

  @Query(() => [Recipe])
  async allRecipe(): Promise<Recipe[]> {
    const allRecipes = this.recipesService.findAll() || []
    return allRecipes
  }

  @Mutation(() => Recipe)
  async addRecipe(
    @Args({ name: 'CreateRecipe', type: () => RecipeInput })
    recipe: RecipeInput
  ): Promise<Recipe> {
    return this.recipesService.add(recipe)
  }
}
