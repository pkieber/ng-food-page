import { Component, Input, OnInit } from '@angular/core';
import { Tag } from 'src/app/shared/models/tag.class';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  @Input()
  foodPageTags?: string[];

  @Input()
  justifyContent: string = 'center';

  tags?: Tag[];
  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    if(!this.foodPageTags)
      this.tags = this.foodService.getAllTags();
  }

}
