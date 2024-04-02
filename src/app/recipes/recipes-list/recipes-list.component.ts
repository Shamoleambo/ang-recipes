import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
})
export class RecipesList {
  recipes: Recipe[] = [
    new Recipe(
      'Plastic Food',
      'Stupid plastic food',
      'https://m.media-amazon.com/images/I/81tGII2MOmL.jpg'
    ),
  ];
}
