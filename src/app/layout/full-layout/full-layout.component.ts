import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.css']
})
export class FullLayoutComponent {
  
  navItemsList:NavItem[] = [
    {id :1, label : 'cats', path:'/main/cats', visited: false},
    {id :2, label : 'dogs', path:'/main/dogs'},
    {id :3, label : 'mices', path:'/main/mices'},
  ] 

  constructor(private router:Router, private _appService:AppService){ }

  navigate(item:NavItem){
   if(item.label == 'cats' ) this._appService.catRouteVisited = true
   this.router.navigate([item.path])
  }

  get pathName(){
    return window.location.pathname
  }
}

export interface NavItem{
  id : number,
  label : string,
  path: string,
  visited? : boolean
}