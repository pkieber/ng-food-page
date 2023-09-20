import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/food.class';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {

  originalFoods: Food[] = [];
  foods: Food[] = [];

  constructor(private foodService: FoodService, private route: ActivatedRoute){}

  ngOnInit(): void {
    // Initialize the originalFoods array with all food items
    this.originalFoods = this.foodService.getAll();
    this.foods = this.originalFoods;

    // Search functionality
    this.route.params.subscribe(params => {
      if (params['searchTerm']) {
        this.foods = this.originalFoods.filter(food =>
          food.name.toLowerCase().includes(params['searchTerm'].toLowerCase())
        );
      } else {
        // If no search term is provided, reset to the original data
        this.foods = this.originalFoods;
      }
    });
  }
}
