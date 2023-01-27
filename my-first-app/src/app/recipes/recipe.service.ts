import {Recipe} from "./recipe.model";
import {EventEmitter, Output} from "@angular/core";

export class RecipeService {

  testRecipeImagePath: string[] = ['https://bbqgrillandsmoke.com/wp-content/uploads/2022/08/Grilled-Sandwich-Recipe-2-735x490.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZnZkz7iXV8svhMdt8z4DL3iVd-_qYhlqb_w&usqp=CAU'];

  private recipes: Recipe[] = [
    new Recipe('Sandwich', 'Cheese Sandwich', this.testRecipeImagePath[0]),
    new Recipe('Custard', 'Cold desert', this.testRecipeImagePath[1])
  ];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice();
  }
}
