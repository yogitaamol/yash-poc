import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PolicyService } from './policy.service';
// import { UserData } from './user-data';

//import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-project';

  isLogin=false;

constructor(private policyService:  PolicyService, 
  private router : Router ) { }

  // users: UserData[] = [];


  ngOnInit(){
  this.policyService.regData.subscribe((res)=>{
    debugger;
   if(res==null){
     this.isLogin=false;
this.router.navigate(['login'])
   } else {
     this.isLogin= true;
//this.router.navigate(['hom'])
   }
  })
  }
  // getUsers() {
  //   this.appservice.getUsers().subscribe((data: UserData[]) => {
  //     this.users = data;
  //   });

 // }
}




