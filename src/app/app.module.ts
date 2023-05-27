import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BreadcrumbModule} from 'angular-crumbs';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { IndexPageComponent } from './index-page/index-page.component';
import { LoginNgModalComponent } from './login-ng-modal/login-ng-modal.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DepartmentsPageComponent } from './departments-page/departments-page.component';
import { EmployeePageComponent } from './employee-page/employee-page.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TieredMenuModule } from 'primeng/tieredmenu';

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    LoginNgModalComponent,
    NavBarComponent,
    HomePageComponent,
    DepartmentsPageComponent,
    EmployeePageComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BreadcrumbModule,
    ButtonModule,
    InputTextModule,
    PasswordModule,
    BrowserAnimationsModule,
    DynamicDialogModule,
    TieredMenuModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
