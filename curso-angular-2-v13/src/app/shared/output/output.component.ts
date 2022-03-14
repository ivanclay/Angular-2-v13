import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  @Output() public enviarDados = new EventEmitter();

  public list: Array<{nome: string, idade: number}> =[
    {nome: "José", idade: 2150 },
    {nome: "Maria", idade: 2148 },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  getDados(index: number): void {
    this.enviarDados.emit(this.list[index]);
  }

}
