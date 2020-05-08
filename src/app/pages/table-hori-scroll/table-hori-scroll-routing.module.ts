import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableHoriScrollComponent } from './table-hori-scroll.component';


const routes: Routes = [
  { path:'',component: TableHoriScrollComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableHoriScrollRoutingModule { }
