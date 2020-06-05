import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArrayCopyComponent } from './array-copy.component';


const routes: Routes = [
  { path:'',component:ArrayCopyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArrayCopyRoutingModule { }
