import { EventEmitter, Injectable } from "@angular/core";

@Injectable ({providedIn:'root'})
export class RecipeService {
  recipes=[{ name: "Recipe Spring", season: "Spring", id: 0}, { name: "Recipe Spring2", season: "Spring", id: 1},
            {name: "Recipe Summer", season: "Summer", id: 2}, { name: "Recipe Summer2", season: "Summer", id: 3},
            {name: "Recipe Fall", season: "Fall", id: 4}, { name: "Recipe Fall2", season: "Fall", id: 5},
            {name: "Recipe Winter", season: "Winter", id: 6}, { name: "Recipe Winter2", season: "Winter", id: 7},]
  sortedRecipes = []
  recipeChanged = new EventEmitter();
  recipeSelected = new EventEmitter();

  onChooseSeason(season:string){
    //this.sortedRecipes=this.recipes.filter(r=> r.season===season)
    //console.log(this.sortedRecipes);
    //this.recipeChanged.emit (this.sortedRecipes);
    return this.recipes.filter(r=> r.season===season)

  }

  onChooseRecipe(i:number){
    this.recipeSelected.emit (this.sortedRecipes[i]);
  }
}





