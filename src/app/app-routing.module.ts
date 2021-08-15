import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './auth/components/home/home.component';
import { RegistrationComponent } from './auth/components/registration/registration.component';
import { CutomerlistComponent } from './cutomerlist/cutomerlist.component';


const routes: Routes = [
//  { path:'login',
//    loadChildren: ()=> import('./auth/auth.module').then(m =>m.AuthModule)
//  } ,

 {path:'customerlist', component: CutomerlistComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
