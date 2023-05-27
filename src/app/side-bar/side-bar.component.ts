import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToggleService } from '../shared/toggle.service';
import { PrimeIcons, MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit{
  settings: MenuItem[];
  
  constructor(private router: Router, public toggleService: ToggleService){}

  ngOnInit() {
   
    this.settings = [
      
      {
        label: 'Settings',
      icon: PrimeIcons.COG,
      items: [
        {
          label: 'Account Setting',
        icon: PrimeIcons.USER_EDIT,
        },
        {
          command: () => this.router.navigate(['index-page']),
          label: 'Logout',
        icon: PrimeIcons.SIGN_OUT,
        },
        
      ]
      },

    ]
    
  }
  //get toggle state
  toggleState: boolean = this.toggleService.getState();

   //log out btn
 
}
