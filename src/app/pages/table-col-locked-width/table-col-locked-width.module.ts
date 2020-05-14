import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableColLockedWidthRoutingModule } from './table-col-locked-width-routing.module';
import { TableColLockedWidthComponent } from './table-col-locked-width.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ TableColLockedWidthComponent ],
  imports: [
    CommonModule,
    TableColLockedWidthRoutingModule,NgZorroAntdModule,FormsModule,ReactiveFormsModule
  ],
  exports: [TableColLockedWidthComponent ]
})
export class TableColLockedWidthModule { }
