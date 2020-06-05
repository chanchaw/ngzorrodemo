import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArrayCopyRoutingModule } from './array-copy-routing.module';
import { ArrayCopyComponent } from './array-copy.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [ ArrayCopyComponent ],
  imports: [
    CommonModule,
    ArrayCopyRoutingModule,NgZorroAntdModule
  ]
})
export class ArrayCopyModule { }
