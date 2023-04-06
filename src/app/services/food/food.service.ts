import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  foods:String[] = []

  getAll(): String[]{
    for (let i = 1; i < 7; i++){
      this.foods.push(`/assets/images/foods/food-${i}.jpg`)
    }
    return this.foods
  }

}
