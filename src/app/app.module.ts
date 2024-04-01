import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Header } from './header/header.component';
import { Recipes } from './recipes/recipes.component';
import { RecipeDetail } from './recipes/recipe-detail/recipe-detail.component';
import { RecipesList } from './recipes/recipes-list/recipes-list.component';
import { ShoppingList } from './shopping-list/shopping-list.component';
import { ShoppingEdit } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeItem } from './recipes/recipes-list/recipe-item/recipe-item.component';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    Recipes,
    RecipeDetail,
    RecipesList,
    RecipeItem,
    ShoppingList,
    ShoppingEdit
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
