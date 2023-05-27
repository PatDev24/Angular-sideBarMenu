import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-login-ng-modal',
  templateUrl: './login-ng-modal.component.html',
  styleUrls: ['./login-ng-modal.component.css'],
  providers: [DialogService],
  
})
export class LoginNgModalComponent  {

  constructor (private router: Router,  private dialogRef: DynamicDialogRef ){ }
  onOpenHome(){
    //navigate to home
    this.router.navigate(['Home']);
    //close the  login modal
    this.dialogRef.close();
    this.dialogRef.destroy();
    
  
    
  }
}
