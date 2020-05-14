import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableColLockedWidthComponent } from './table-col-locked-width.component';


const routes: Routes = [
  { path:'',component: TableColLockedWidthComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableColLockedWidthRoutingModule { }
