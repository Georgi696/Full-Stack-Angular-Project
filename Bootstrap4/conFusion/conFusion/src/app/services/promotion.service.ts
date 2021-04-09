import { Injectable } from '@angular/core';
import { Promotion } from "../sharedFolder/promotion";
import { PROMOTIONS } from "../sharedFolder/promotions";
import {Observable, of } from "rxjs";
import { delay } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  getPromotions(): Observable<Promotion[]> {
    return of(PROMOTIONS).pipe(delay(2000));
  }

  getPromo(id: string): Observable<Promotion> {
    return of(PROMOTIONS.filter((dish) => (dish.id === id))[0]).pipe(delay(2000));
  }

  getFeuturedPromo(): Observable<Promotion> {
    return of(PROMOTIONS.filter((dish) => dish.featured)[0]).pipe(delay(2000));
  }

  constructor() { }
}
