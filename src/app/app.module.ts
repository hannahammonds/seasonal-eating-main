import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SeasonComponent } from './season/season.component';
import { IngredientChoiceComponent } from './ingredient-choice/ingredient-choice.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { AppRoutingModule } from './app-routing-moduel';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DropdownDirective } from './season/dropdown.directive';
import { SpringComponent } from './season/spring/spring.component';
import { SummerComponent } from './season/summer/summer.component';
import { FallComponent } from './season/fall/fall.component';
import { WinterComponent } from './season/winter/winter.component';
import { FormsModule } from '@angular/forms';
import { SeasonTypeComponent } from './season-type/season-type.component';

@NgModule({
  declarations: [
    AppComponent,
    SeasonComponent,
    IngredientChoiceComponent,
    HeaderComponent,
    RecipeComponent,
    RecipeListComponent,
    PageNotFoundComponent,
    DropdownDirective,
    SpringComponent,
    SummerComponent,
    FallComponent,
    WinterComponent,
    SeasonTypeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
