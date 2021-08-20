import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './auth/components/home/home.component';
import { RegistrationComponent } from './auth/components/registration/registration.component';
import { CutomerlistComponent } from './cutomerlist/cutomerlist.component';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
//  { path:'login',
//    loadChildren: ()=> import('./auth/auth.module').then(m =>m.AuthModule)
//  } ,

 {path:'customerlist', component: CutomerlistComponent},
//  {path: 'navbar', component: NavbarComponent}

 
];

const route: Routes = [
 {path: 'navbar', component: NavbarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
