import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-data-binding></app-data-binding>
  <router-outlet></router-outlet>`
}) //fazendo de um modo diferente
export class AppComponent {
  title = 'curso-angular-2-v13';
}
