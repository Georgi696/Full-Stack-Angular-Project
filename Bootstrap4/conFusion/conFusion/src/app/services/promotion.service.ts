import { Injectable } from '@angular/core';
import { Promotion } from "../sharedFolder/promotion";
import { PROMOTIONS } from "../sharedFolder/promotions";

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  getPromotions(): Promotion[]{
    return PROMOTIONS;
  }

  getPromotion(id: string): Promotion{
    return PROMOTIONS.filter((promo) => (promo.id === id))[0];
  }

  getFeuturedPromo(): Promotion{
    return PROMOTIONS.filter((promo) => promo.featured)[0];
  }

  constructor() { }
}
