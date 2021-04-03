import { Component, OnInit } from '@angular/core';
import { Dish } from '../sharedFolder/dish';
import { DISHES } from '../sharedFolder/dishes';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  dishes: Dish[] = DISHES;

  selectedDish: Dish;
  
  constructor(private dishService: DishService) { }

  ngOnInit(): void {
  }

  onSelect(dish: Dish){
    this.selectedDish = dish;
  }
}
