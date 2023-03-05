import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardRoutingModule } from './board-routing.module';
import { UpdateFormComponent } from './component/update-form/update-form.component';
import { ReactiveFormsModule } from "@angular/forms";
import { QuillModule } from "ngx-quill";

@NgModule({
  declarations: [

    UpdateFormComponent
  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    ReactiveFormsModule,
    QuillModule,
  ]
})
export class BoardModule { }
