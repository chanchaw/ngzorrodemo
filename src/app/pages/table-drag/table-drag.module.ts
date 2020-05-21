import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableDragRoutingModule } from './table-drag-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { TableDragComponent } from './table-drag.component';

import { DragDropModule } from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [ TableDragComponent ],
  imports: [
    CommonModule,
    TableDragRoutingModule,NgZorroAntdModule,DragDropModule
  ]
})
export class TableDragModule { }
