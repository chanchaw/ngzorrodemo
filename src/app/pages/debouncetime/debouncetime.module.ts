import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DebouncetimeRoutingModule } from './debouncetime-routing.module';
import { DebouncetimeComponent } from './debouncetime.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';


@NgModule({
  declarations: [DebouncetimeComponent],
  imports: [
    CommonModule,
    DebouncetimeRoutingModule,FormsModule,ReactiveFormsModule,NgZorroAntdModule
  ]
})
export class DebouncetimeModule { }
