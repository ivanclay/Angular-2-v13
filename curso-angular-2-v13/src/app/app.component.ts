import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
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

  title = 'curso-angular-2-v13';
}
