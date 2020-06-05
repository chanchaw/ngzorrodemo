import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'tableHoriScroll', loadChildren: () => import('./pages/table-hori-scroll/table-hori-scroll.module').then(m => m.TableHoriScrollModule) },
  { path: 'tableLockColWidth', loadChildren: () => import('./pages/table-col-locked-width/table-col-locked-width.module').then(m => m.TableColLockedWidthModule) },
  { path: 'button', loadChildren: () => import('./pages/button/button.module').then(m => m.ButtonModule) },
  { path: 'tableDrag', loadChildren: () => import('./pages/table-drag/table-drag.module').then(m => m.TableDragModule) },
  { path: 'debounceTime', loadChildren: () => import('./pages/debouncetime/debouncetime.module').then(m => m.DebouncetimeModule) },
  { path: 'arrayCopy', loadChildren: () => import('./pages/array-copy/array-copy.module').then(m => m.ArrayCopyModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
