import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  btnDisabled:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onClick02(){
    alert('如果是不可用状态，不应该看到我！');
  }

  onClick01(){
    alert('官方提供案例，不可用状态下，你看不见我');
  }
}
