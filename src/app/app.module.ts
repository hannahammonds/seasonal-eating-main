import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SeasonComponent } from './season/season.component';
import { IngredientChoiceComponent } from './ingredient-choice/ingredient-choice.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SeasonComponent,
    IngredientChoiceComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
