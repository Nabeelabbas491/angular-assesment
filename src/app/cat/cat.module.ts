import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsComponent } from './cats/cats.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "cats",
    component : CatsComponent,
  }
  ] ;

@NgModule({
  declarations: [
    CatsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class CatModule { }
