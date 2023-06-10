import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsComponent } from './dogs/dogs.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "dogs",
    component : DogsComponent
  }
  ] ;

@NgModule({
  declarations: [
    DogsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class DogModule { }
