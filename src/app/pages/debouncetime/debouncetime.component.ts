import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-debouncetime',
  templateUrl: './debouncetime.component.html',
  styleUrls: ['./debouncetime.component.css']
})
export class DebouncetimeComponent implements OnInit,OnDestroy {

  oValue:string = '';// 用户手动输入的 input 控件的 ngModel
  tValue:String = '';// 最终接受结果的 input 控件的 ngModel

  // 前后间隔1000毫秒的输入才有效，小于该时间间隔的输入被屏蔽（忽略掉）
  // 模板代码中要使用 (ngModelChange)="searchText$.next($event)" 传递输入值
  searchText$ = new Subject<string>().pipe(debounceTime(1000));
  subscription$:Subscription = null;// 订阅对象，要在组件的 ngOnDestroy 事件中取消订阅

  constructor() { // 组件构造函数，初始化可观察对象的逻辑 - 停止输入1000毫秒之后，将原始值赋值给目标控件中
    this.subscription$ = this.searchText$.subscribe(val =>{
      this.tValue = this.oValue;
    })
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  ngOnInit(): void {
  }

}
