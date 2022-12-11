import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './component/detail/detail.component';
import { ListComponent } from './component/list/list.component';
import { SaveFormComponent } from './component/save-form/save-form.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'detail/:id',
    component: DetailComponent,
  },
  {
    path: 'save',
    component: SaveFormComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardRoutingModule {}
