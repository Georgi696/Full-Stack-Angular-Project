import { Component, OnInit } from '@angular/core';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';
import { DishService } from '../services/dish.service';
import { PromotionService } from '../services/promotion.service';
import { Dish } from '../sharedFolder/dish';
import { DISHES } from '../sharedFolder/dishes';
import { Promotion } from '../sharedFolder/promotion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  
  constructor(private dishService: DishService, private promoService: PromotionService) { }

  ngOnInit(): void {
    this.dish = this.dishService.getFeauteredDish();
    this.promotion = this.promoService.getFeuturedPromo();
  }

}
