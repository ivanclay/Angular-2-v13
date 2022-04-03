import { Component, OnInit } from '@angular/core';
import { Investiments } from '../../model/investiments';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public investiments: Array<Investiments> = [
    {
      name: "Itau",
      value: 110
    },
    {
      name: "BB",
      value: 100
    },
    {
      name: "NU",
      value: 500
    },
    {
      name: "Inter",
      value: 450
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
