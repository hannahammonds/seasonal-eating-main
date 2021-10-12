import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { IngredientChoiceComponent } from "./ingredient-choice/ingredient-choice.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeComponent } from "./recipe/recipe.component";
import { FallComponent } from "./season/fall/fall.component";
import { SeasonComponent } from "./season/season.component";
import { SpringComponent } from "./season/spring/spring.component";
import { SummerComponent } from "./season/summer/summer.component";
import { WinterComponent } from "./season/winter/winter.component";

const appRoutes: Routes = [
  { path: '', pathMatch: "full", redirectTo: 'season' },
  { path: 'season', component: SeasonComponent, children: [
    { path: 'spring', component: SpringComponent },
    { path: 'summer', component: SummerComponent },
    { path: 'fall', component: FallComponent },
    { path: 'winter', component: WinterComponent },
  ]},
  { path: 'ingredient', component: IngredientChoiceComponent },
  { path: 'recipe-list', component: RecipeListComponent },
  { path: 'recipe', component: RecipeComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/page-not-found' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
