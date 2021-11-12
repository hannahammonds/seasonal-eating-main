import { Injectable } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipe } from './shared/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor( private recipeService: RecipeService ) {}

  fetchRecipes() {
    // return this.http.get<Recipe[]>(//put in firebase link//)
    // .pipe(filter(recipe => {

    // })
    // )
  }
}
