import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from "./layout/component/footer/footer.component";
import { HeaderComponent } from "./layout/component/header/header.component";
import { JoinFormComponent } from "./user/component/join-form/join-form.component";
import { LoginFormComponent } from "./user/component/login-form/login-form.component";
import { UpdateFormComponent } from "./user/component/update-form/update-form.component";
import { DetailComponent } from "./board/component/detail/detail.component";
import { SaveFormComponent } from "./board/component/save-form/save-form.component";
import { ListComponent } from "./board/component/list/list.component";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FooterComponent,
    FooterComponent,
    HeaderComponent,
    JoinFormComponent,
    LoginFormComponent,
    UpdateFormComponent,
    DetailComponent,
    SaveFormComponent,
    ListComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule,
        AngularEditorModule,
        QuillModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
