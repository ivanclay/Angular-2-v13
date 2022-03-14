import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition: boolean = true;
  public conditionClick: boolean = true;
  public list: Array<{nome:string, idade: number}> = [
    {nome: "José",  idade: 2150},
    {nome: "Maria", idade: 2148},
  ];
  public nome: string = "qwerty";

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      if(this.condition){
        this.condition = false;
      }else{
        this.condition = true;
      }
    }, 2000);

    }

    cClick(): void{
      if(this.conditionClick){
        this.conditionClick = false;
      }else{
        this.conditionClick = true;
      }
    }

    addToList(): void{
      this.list.push({nome: "Madalena", idade: 2155});
    }

    removerElemento(index: number): void {
      this.list.splice(index, 1);
    }

}
