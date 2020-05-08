import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableHoriScrollRoutingModule } from './table-hori-scroll-routing.module';
import { TableHoriScrollComponent } from './table-hori-scroll.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ TableHoriScrollComponent ],
  imports: [
    CommonModule,
    TableHoriScrollRoutingModule,NgZorroAntdModule,FormsModule,ReactiveFormsModule
  ],
  exports: [ TableHoriScrollComponent ]
})
export class TableHoriScrollModule { }
