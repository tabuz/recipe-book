import { Ingridients } from "../shared/ingridients";
export class Recipe {
  constructor(public name, public description, public imagePath, public ingridients: Ingridients[]){

  }
}
