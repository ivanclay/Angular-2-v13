import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<app-diretivas-estruturais></app-diretivas-estruturais>
<hr>
  <br>
<app-data-binding></app-data-binding>
  <br>
  <router-outlet></router-outlet>`
}) //fazendo de um modo diferente
export class AppComponent {
  title = 'curso-angular-2-v13';
}
