import { Ingredient } from "./ingredient.model";


export class Recipe {


  constructor(public name: string, public season: string, public desc: string, public ingredients: Ingredient[]) {

  }
}


