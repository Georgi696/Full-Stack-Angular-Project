import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../sharedFolder/dish';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css']
})
export class DishdetailComponent implements OnInit {

  @Input()
  dish: Dish;

  constructor() { }

  ngOnInit(): void {
  }
}