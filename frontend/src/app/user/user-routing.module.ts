import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JoinFormComponent } from './component/join-form/join-form.component';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { UpdateFormComponent } from './component/update-form/update-form.component';

const routes: Routes = [
  {
    path: 'update',
    component: UpdateFormComponent
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'join',
    component: JoinFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
