import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  public listComida: Array<{comida: string, preco: string}> = [
    {comida: 'xbacon', preco: 'R$10'},
    {comida: 'xtudo', preco: 'R$11'},
    {comida: 'xegg', preco: 'R$12'},
    {comida: 'xqueijo', preco: 'R$13'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(form: NgForm) {
    console.log(form.value);
  }

}
