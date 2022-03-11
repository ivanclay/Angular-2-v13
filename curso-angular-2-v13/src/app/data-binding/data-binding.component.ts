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
  public btnDisabled: boolean = true;
  public imgSrc: string = 'https://vidafullstack.com.br/wp-content/uploads/2021/12/banner.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
