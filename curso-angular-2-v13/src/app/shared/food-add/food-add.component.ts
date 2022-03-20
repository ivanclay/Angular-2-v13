import { Component, OnInit } from '@angular/core';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent implements OnInit {

  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
  }

  public listAddItem(inputValue: string){
    this.foodListService.foodListAdd(inputValue).subscribe(
      res => this.foodListService.foodListAlert(res),
      error => error
    );
  }

}
