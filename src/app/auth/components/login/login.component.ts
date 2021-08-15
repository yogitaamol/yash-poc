import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PolicyService } from 'src/app/policy.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  frmLogin: FormGroup;
  showError: boolean=false;
  getRegDatatemp: any =[];
  message: string='';

  constructor( private policy: PolicyService,
    private router:Router

  ) {
    this.frmLogin = this.createFormGroup();

   }

  ngOnInit(): void {
   

  }
  submitLogin(){
    debugger;
    if(this.frmLogin.valid){
      const data = this.frmLogin.value;
      this.policy.login(data).subscribe((res)=>{
  if(res){
this.router.navigate(['home'])
  }else {

  }
      }, (err)=>{
        this.message='User/password does not exists.';
        this.showError=true;
      })
    }
   
  }
  
  createFormGroup() 
  {
    return new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
     
    });
  }
  // onRegister(){
  //   console.log(this.frmLogin.value);
  //   this.frmLogin.reset();
    
  // }

}
