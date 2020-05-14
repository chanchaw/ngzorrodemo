import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-col-locked-width',
  templateUrl: './table-col-locked-width.component.html',
  styleUrls: ['./table-col-locked-width.component.css']
})
export class TableColLockedWidthComponent implements OnInit {

  names = ['爱德华','阿尔冯斯.艾尔利克','斯卡','霍因海姆.艾尔利克'];
  realName:string = '';

  tableData = [
    { name: '斯卡',age: 18,address:'伊修巴尔',remark:'贤者之石'}
  ]
  constructor() { }

  ngOnInit() {
  }

}
