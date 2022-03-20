import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-food-add></app-food-add>
  <app-food-list></app-food-list>
  <br>
  <ng-template [ngIf]="getDados">
    <h1>{{getDados.nome}}</h1>
    <h2>{{getDados.idade}}</h2>
  </ng-template>
  <app-output (enviarDados)="setDados($event)"></app-output>
  <hr>
  <app-input [contador]="addValue"></app-input>
  <hr>
  <app-new-component></app-new-component>
  <hr>
  <app-diretivas-atributos></app-diretivas-atributos>
  <hr>
  <app-diretivas-estruturais></app-diretivas-estruturais>
  <hr>
  <br>
  <app-data-binding></app-data-binding>
  <br>
  <router-outlet></router-outlet>`
}) //fazendo de um modo diferente
export class AppComponent {
  public addValue: number = 10;
  public getDados: {nome: string, idade: number} | undefined;

  title = 'curso-angular-2-v13';

  public setDados(event:{nome: string, idade: number}):void {
    this.getDados = event;
  }
}
