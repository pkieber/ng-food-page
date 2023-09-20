import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/shared/models/food.class';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent implements OnInit {

  food!: Food;
  constructor(
      private activatedRoute: ActivatedRoute,
      private foodService: FoodService,
    ) {
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
        this.food = foodService.getFoodById(params['id']);
    })
  }

  ngOnInit(): void {

  }

}
