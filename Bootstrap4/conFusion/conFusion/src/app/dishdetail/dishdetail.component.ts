import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../sharedFolder/dish';
import { DishService } from "../services/dish.service";
import { Params, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { MatButtonModule } from '@angular/material/button';
import { DISHES } from '../sharedFolder/dishes';



@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css']
})
export class DishdetailComponent implements OnInit {

  @Input()
  dish: Dish;

  constructor(private dishService: DishService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.dishService.getDishes().subscribe(dish => this.dish[id] = dish);
  }
  goBack():void {
    this.location.back();
  }
}
