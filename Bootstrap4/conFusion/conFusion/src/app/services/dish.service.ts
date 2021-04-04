import { Injectable } from '@angular/core';
import { Dish } from '../sharedFolder/dish';
import { DISHES } from '../sharedFolder/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  getDishes(): Dish[]{
    return DISHES;
  }

  getDish(id: string): Dish{
    return DISHES.filter((dish) => (dish.id === id))[0];
  }
  getFeauteredDish(): Dish{
    return DISHES.filter((dish) => dish.featured)[0];
  }

  constructor() { }
}
