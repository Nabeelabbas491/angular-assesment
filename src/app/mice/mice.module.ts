import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MicesComponent } from './mices/mices.component';
import { RouterModule, Routes } from '@angular/router';
import { MiceGuard } from '../mice.guard';

const routes: Routes = [
  {
    path: "mices",
    component : MicesComponent,
    canActivate : [MiceGuard]
  }
  ] ;

@NgModule({
  declarations: [
    MicesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class MiceModule { }
