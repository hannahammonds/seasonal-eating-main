import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  recipe;
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.recipeService.recipeSelected.subscribe(recipe=>this.recipe=recipe);
      this.route.params.subscribe((params) => {
      this.recipe = this.recipeService.getRecipe(+params['id'])[0];
      console.log('recipe--->', this.recipe);
    });
  }
}

// need the paramas to get Id, inject ActivatedRoute
// fetch recipe from the recipeService with the Id
// store the recipe in a class property
// print out the details in the html file
