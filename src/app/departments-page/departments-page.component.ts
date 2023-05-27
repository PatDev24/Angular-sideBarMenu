import { Component } from '@angular/core';
import { ToggleService } from '../shared/toggle.service';

@Component({
  selector: 'app-departments-page',
  templateUrl: './departments-page.component.html',
  styleUrls: ['./departments-page.component.css']
})
export class DepartmentsPageComponent {

  constructor(public toggleService: ToggleService){}
}
