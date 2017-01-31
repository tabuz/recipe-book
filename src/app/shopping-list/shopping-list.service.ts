import { Ingridients } from '../shared/ingridients';
export class ShoppingListService {
  private items: Ingridients[] = [];

  constructor() { }

  getItems() {
    return this.items;
  }

  addItems(items: Ingridients[]) {
    Array.prototype.push.apply(this.items,items);
  }
}
