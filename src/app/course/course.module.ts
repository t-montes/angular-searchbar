import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CourseComponent } from './course.component';

@NgModule({
  declarations: [
    CourseComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CourseComponent
  ]
})
export class CourseModule { }
