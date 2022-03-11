import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  public nome: string = "Ivan";
  public idade: number = 30;
  public um: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
