import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';
@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Pork Stew', 'with chickpeas','http://images.bigoven.com/image/upload/t_recipe-256/garbanzo-bean-chick-pea-stew-4.jpg', [] ),
    new Recipe('Jaja', 'W sosie', 'http://static.wizaz.pl/resize/var/ezdemo_site/storage/images/kuchnia/nowosci-kulinarne/co-warto-wiedziec-o-jajkach/dlaczego-warto-jesc-jajka/103529-1-pol-PL/Dlaczego-warto-jesc-jajka.jpg?width=256&height=256', [])
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>()

  constructor() { }

  ngOnInit() {
  }
  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }
}
