import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DebouncetimeComponent } from './debouncetime.component';


const routes: Routes = [{
  path:'',component:DebouncetimeComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DebouncetimeRoutingModule { }
