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

  constructor() { }
}
