import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredient-choice',
  templateUrl: './ingredient-choice.component.html',
  styleUrls: ['./ingredient-choice.component.css']
})
export class IngredientChoiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f) {
    console.log(f)
  }


}

