import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { JoinFormComponent } from './views/user/join-form/join-form.component';
import { LoginFormComponent } from './views/user/login-form/login-form.component';
import { UpdateFormComponent } from './views/user/update-form/update-form.component';
import { DetailComponent } from './views/board/detail/detail.component';
import { ListComponent } from './views/board/list/list.component';
import { SaveFormComponent } from './views/board/save-form/save-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    JoinFormComponent,
    LoginFormComponent,
    UpdateFormComponent,
    DetailComponent,
    ListComponent,
    SaveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
