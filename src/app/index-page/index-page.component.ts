import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { LoginNgModalComponent } from '../login-ng-modal/login-ng-modal.component';


@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css'],
  providers: [DialogService]
})
export class IndexPageComponent {
  ref: DynamicDialogRef = new DynamicDialogRef;

 
  constructor(public dialogService: DialogService) {}

    show() {
        this.ref = this.dialogService.open(LoginNgModalComponent, { position: 'center', header: 'Login'});

       
        };
          
        

        

    }
    


