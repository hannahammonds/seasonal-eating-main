import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from './shared/ingredient.model';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  recipes = [
    {
      name: 'Recipe Spring',
      season: 'Spring',
      ingredients: [new Ingredient('broccoli', 2)],
      id: 0,
    },
    {
      name: 'Recipe Spring2',
      season: 'Spring',
      ingredients: [new Ingredient('kohlrabi', 2)],
      id: 1
    },
    {
      name: 'Recipe Summer',
      season: 'Summer',
      ingredients: [new Ingredient('zucchini', 2)],
       id: 2
    },
    {
      name: 'Recipe Summer2',
      season: 'Summer',
      ingredients: [new Ingredient('tomato', 5)],
      id: 3
    },
    {
      name: 'Recipe Fall',
      season: 'Fall',
      ingredients: [new Ingredient('butternut squash', 1)],
      id: 4
    },
    {
      name: 'Recipe Fall2',
      season: 'Fall',
      ingredients: [new Ingredient('okra', 20)],
      id: 5
    },
    {
      name: 'Recipe Winter',
      season: 'Winter',
      ingredients: [new Ingredient('potato', 5)],
      id: 6
    },
    {
      name: 'Recipe Winter2',
      season: 'Winter',
      ingredients: [new Ingredient('turnip', 3)],
      id: 7 },
  ];
  sortedRecipes = [];
  recipeChanged = new EventEmitter();
  recipeSelected = new EventEmitter();

  onChooseSeason(season: string) {
    //this.sortedRecipes=this.recipes.filter(r=> r.season===season)
    //console.log(this.sortedRecipes);
    //this.recipeChanged.emit (this.sortedRecipes);
    return this.recipes.filter((r) => r.season === season);
  }

  onChooseRecipe(i: number) {
    this.recipeSelected.emit(this.sortedRecipes[i]);
  }
}

// ingredients: [new Ingredient("tomatoes", 5)]

//
// constructor(public name: string, public season: string, public desc: string, public ingredients: Ingredient[]) {

// }
