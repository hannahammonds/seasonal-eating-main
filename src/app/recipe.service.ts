import { EventEmitter, Injectable } from "@angular/core";

@Injectable ({providedIn:'root'})
export class RecipeService {
  recipes=[{ name: "Recipe Spring", season: "Spring"}, { name: "Recipe Spring2", season: "Spring"}, {name: "Recipe Summer", season: "Summer"}, {name: "Recipe Fall", season: "Fall"}, {name: "Recipe Winter", season: "Winter"}]
  sortedRecipes = []
  recipeChanged = new EventEmitter();
  recipeSelected = new EventEmitter();
  
  onChooseSeason(season:string){
    this.sortedRecipes=this.recipes.filter(r=> r.season===season)
    console.log(this.sortedRecipes);
    this.recipeChanged.emit (this.sortedRecipes);

  }

  onChooseRecipe(i:number){
    this.recipeSelected.emit (this.sortedRecipes[i]);
  }
}





