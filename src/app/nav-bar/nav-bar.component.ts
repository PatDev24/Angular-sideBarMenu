import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ToggleService } from '../shared/toggle.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor (private router: Router, public toggleService: ToggleService ){ }
  //toggle sidebar
  toggleState: boolean = false;
toggle(){
 /*  console.log(this.toggleState); */
  this.toggleState =!this.toggleState;
  this.toggleService.setState(this.toggleState);
}
  //log out btn
  logout(){
    this.router.navigate(['index-page']);
    
  
  }


}
