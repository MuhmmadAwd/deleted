import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ArchivedTableComponent } from './archived-table/archived-table.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ArchivedTableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ArchivedOrdersModule { }
