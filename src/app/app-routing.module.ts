import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPageComponent } from './index-page/index-page.component';
import { LoginNgModalComponent } from './login-ng-modal/login-ng-modal.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EmployeePageComponent } from './employee-page/employee-page.component';
import { DepartmentsPageComponent } from './departments-page/departments-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'index-page', pathMatch: 'full'},
  {path: 'index-page', component: IndexPageComponent, children:[
        {path: 'Login', component: LoginNgModalComponent, data: {breadcrumb:'Login'}},
    /*  {path: 'Register', component: SignupComponent}, */
]}, 
{path: 'Home', component: HomePageComponent, data: {breadcrumb: 'Home'}},
        {path: 'Employee', component: EmployeePageComponent, data: {breadcrumb: 'Employee'}},
{path: 'Departments', component: DepartmentsPageComponent,data: {breadcrumb: 'Departments'}},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
