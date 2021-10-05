import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css']
})

export class SeasonComponent implements OnInit {
  open=false
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
  }

  onToggleDropDown() {
    this.open=!this.open;

  }

  onChooseSeason(season: string) {
    console.log(season);
    this.recipeService.onChooseSeason (season);
    this.open=false;
  }

}
