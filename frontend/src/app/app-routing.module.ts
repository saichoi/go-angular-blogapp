import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListComponent } from './board/component/list/list.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
    pathMatch: 'full'
  },
  {
    path: 'user',
    loadChildren: () =>
      import('./user/user.module').then((mod) => mod.UserModule)
  },
  {
    path: 'board',
    loadChildren: () =>
      import('./board/board.module').then((mod) => mod.BoardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
