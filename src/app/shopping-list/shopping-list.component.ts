import { Component, OnInit } from '@angular/core';

import { Ingridients } from "../shared/ingridients";
@Component({
  selector: 'rb-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {
  public items: Ingridients[] = [];
  constructor() { }

  ngOnInit() {
  }

}
