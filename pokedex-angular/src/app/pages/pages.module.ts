import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//COMPONENTS
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

//MODULES
import { RoutingModule } from './routing.modules';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
