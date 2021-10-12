import { Component, OnInit, Output } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css']
})

export class SeasonComponent implements OnInit {
  open=false
  constructor(private recipeService:RecipeService) { }
  seasonList: any

  ngOnInit(): void {
  }

  onToggleDropDown() {
    this.open=!this.open;

  }

  onChooseSeason(season: string) {
    console.log(season);
    this.seasonList=this.recipeService.onChooseSeason (season);
    console.log(this.seasonList);

  }

}
