import { Component } from '@angular/core';
import { ToggleService } from '../shared/toggle.service';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.css']
})
export class EmployeePageComponent {

  constructor(public toggleService: ToggleService){}

}
