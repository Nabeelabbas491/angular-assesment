import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';

const routes: Routes = [
  {
    path : '',
    component : FullLayoutComponent,
    children : [
      {
        path: 'main',
        loadChildren: () =>   import('./cat/cat.module').then(m => m.CatModule)
      },
      {
        path: 'main',
        loadChildren: () =>   import('./dog/dog.module').then(m => m.DogModule)
      },
      {
        path: 'main',
        loadChildren: () =>   import('./mice/mice.module').then(m => m.MiceModule)
      },
    ]
  },
  {
    path: "**",
    component : ErrorComponent
  }
  ] ;

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    FullLayoutComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  exports : [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
