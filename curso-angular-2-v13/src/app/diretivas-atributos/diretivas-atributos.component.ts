import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {
  public valor: boolean = false;
  public altura: string = "20px";
  public color: string = "red";
  public nome: string = "Matrix";
  public date: Date = new Date();
  public list: Array<{nome:string}> = [
    {nome: "José"},
    {nome: "Maria"}
  ];


  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      if(this.valor){
        this.valor = false;
        this.altura = "50px";
        this.color = "blue";
      }else{
        this.valor = true;
        this.altura = "20px";
        this.color = "red";
      }
    }, 2000);
  }

  salvar(): void{
    this.list.push({nome: this.nome});
    this.list.push({nome: "Madalena"});
    this.nome = "";
  }

}
