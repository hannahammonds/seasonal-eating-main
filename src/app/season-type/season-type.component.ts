import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-season-type',
  templateUrl: './season-type.component.html',
  styleUrls: ['./season-type.component.css']
})

export class SeasonTypeComponent implements OnInit {
  recipes = []
  chosenRecipe = null
  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {}
// grab the params
// inject the recipe service
// and then filter out those with the correct season


ngOnInit(): void  {
    this.route.params.subscribe((params: Params) => {
     let season = params['search'];
     console.log("season", season)
     this.recipes = this.recipeService.onChooseSeason(season);
     console.log("recipes", this.recipes)
    })
  }

  onChooseRecipe(recipe) {
    this.chosenRecipe = recipe;
    console.log(this.chosenRecipe);
    
  }
}




