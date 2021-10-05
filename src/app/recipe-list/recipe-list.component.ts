import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes =[];
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.recipes=this.recipeService.sortedRecipes
    console.log(this.recipes);
    this.recipeService.recipeChanged.subscribe(data=> this.recipes=data);
  }

  onChooseRecipe(i: number){
    this.recipeService.onChooseRecipe(i);
  }
}
