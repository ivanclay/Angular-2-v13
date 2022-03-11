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

  public position: {x: number, y: number} = {x:0, y:0};

  constructor() { }

  ngOnInit(): void {
  }

  public alertaInfo(): void {
    alert('clicou no botão!');
  }


  public alertaInfoParameter(valor:string): void {
    alert('clicou no botão com parametro!');
  }

public alertaInfoParameterEvento(event: MouseEvent): void{
  console.log(event);
}

public mouseMoveEvent(event: MouseEvent): void{
  this.position.x = event.offsetX;
  this.position.y = event.offsetY;
}

}
