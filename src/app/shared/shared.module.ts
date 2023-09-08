import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    CommonModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,

 ],
})
export class SharedModule { }
