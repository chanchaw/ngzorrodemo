import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableDragComponent } from './table-drag.component';


const routes: Routes = [
  { path:'',component:TableDragComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableDragRoutingModule { }
