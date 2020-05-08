import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-hori-scroll',
  templateUrl: './table-hori-scroll.component.html',
  styleUrls: ['./table-hori-scroll.component.css']
})
export class TableHoriScrollComponent implements OnInit {

  listOfData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York'
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 40,
      address: 'London'
    }
  ];

  
  constructor() { }

  ngOnInit() {
  }

}
