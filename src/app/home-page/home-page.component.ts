import { Component, OnInit } from '@angular/core';
import { Title  } from '@angular/platform-browser';
import { BreadcrumbService, Breadcrumb } from 'angular-crumbs';
import { ToggleService } from '../shared/toggle.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private titleService: Title, private breadcrumbService: BreadcrumbService, public toggleService: ToggleService){

  }

   ngOnInit(): void{
  this.breadcrumbService.breadcrumbChanged.subscribe( crumbs=>{
      this.titleService.setTitle(this.createTitle(crumbs)); 
    })
  }
  
 private createTitle(routesCollection: Breadcrumb[]){
  const title = 'Employee Management System';
  const titles = routesCollection.filter((route) => route.displayName);
 
  if(!titles.length){ return title; }

  const routeTitle = this.titlesToString(titles);
  return `${routeTitle} ${title}`;
 }

 private titlesToString(titles: any[]) {
  return titles.reduce((prev, curr) => {
    return `${curr.displayName} - ${prev}`;
 }, ''); 
}

}
