import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-copy',
  templateUrl: './array-copy.component.html',
  styleUrls: ['./array-copy.component.css']
})
export class ArrayCopyComponent implements OnInit {

  oriArray:string[] = ['a','b','c','d'];
  tarArray:string[] = [];

  constructor() { }

  ngOnInit() {
  }

  copyArray(){
    this.tarArray = this.oriArray.filter(item=>1===1);
  }

  modify(){
    this.oriArray[1] = this.oriArray[1] + '1';
    this.oriArray = this.oriArray.filter( item => 1===1);
  }


}
