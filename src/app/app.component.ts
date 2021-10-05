import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'seasonal-eating';
  seasonSelected
  constructor(private recipeService:RecipeService ) {


  }
  ngOnInit() {
    this.seasonSelected=this.recipeService.sortedRecipes.length? true: false
  }
}
