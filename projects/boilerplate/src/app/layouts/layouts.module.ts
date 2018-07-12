/**
 * Layouts module
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OneColLayoutComponent } from './one-col/one-col-component';

@NgModule({
  declarations: [
    OneColLayoutComponent,
  ],
  exports: [
    OneColLayoutComponent,
  ],
  imports: [
    CommonModule,
  ],
})
export class LayoutModule { }
