import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from "../auth/components/registration/registration.component";
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CutomerlistComponent } from '../cutomerlist/cutomerlist.component';
import { HttpClientModule } from '@angular/common/http';
import { LatestResultComponent } from './components/latest-result/latest-result.component';
import { TimeSpentComponent } from './components/time-spent/time-spent.component';
import { NavbarComponent } from '../navbar/navbar.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    CutomerlistComponent,
    HomeComponent,
    LatestResultComponent,
    TimeSpentComponent,
    NavbarComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  exports:[
    LoginComponent,
    RegistrationComponent
  ]
})
export class AuthModule { }
