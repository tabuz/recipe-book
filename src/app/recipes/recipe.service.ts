import { Injectable } from '@angular/core';

import { Recipe } from './recipe';
import { Ingridients } from '../shared/ingridients';

@Injectable()
export class RecipeService {
private recipes: Recipe[] = [
  new Recipe('Pork Stew', 'with chickpeas','http://images.bigoven.com/image/upload/t_recipe-256/garbanzo-bean-chick-pea-stew-4.jpg', [
    new Ingridients('Pork meat', 2),
    new Ingridients('Chickpeas', 5)
  ] ),
  new Recipe('Jaja', 'W sosie', 'http://static.wizaz.pl/resize/var/ezdemo_site/storage/images/kuchnia/nowosci-kulinarne/co-warto-wiedziec-o-jajkach/dlaczego-warto-jesc-jajka/103529-1-pol-PL/Dlaczego-warto-jesc-jajka.jpg?width=256&height=256', [
    new Ingridients('Jajko', 2),
    new Ingridients('Majonez', 5)
  ])
];

  constructor() { }
  getRecipes() {
    return this.recipes;
  }
}
