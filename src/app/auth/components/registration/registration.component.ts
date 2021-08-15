import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PolicyService } from 'src/app/policy.service';
// const fs = require('fs');

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  
  status : any  = "UK";
  status_values: any = ["UK", "India", "US"];

  
  frmRegister: FormGroup;
  registrationList: any=[];

  @Output() output=new EventEmitter<any>();
  constructor( 
    private http:HttpClient,
    private policy:PolicyService,
    private router: Router

  ) {
    this.frmRegister = this.createFormGroup();

   }

  createFormGroup() 
  {
    return new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
      selectcountry: new FormControl(null, [Validators.required]), 
      termsncondition: new FormControl(null, [Validators.required])
    });
  }

get email() {
    return this.frmRegister.get('email') as FormControl;
  }
  get password() {
    return this.frmRegister.get('password') as FormControl;
  }
  get conformpassword() {
    return this.frmRegister.get('conformpassword') as FormControl;
  }
  get selectcountry() {
    return this.frmRegister.get('selectcountry') as FormControl;
  }
  get termsncondition() {
    return this.frmRegister.get('termsncondition') as FormControl;
  }

  ngOnInit(): void {
    //this.postRegistration();
  }
 
  onRegister(){
    
      this.postRegistration();
      console.log(this.frmRegister.value);
      // this.frmRegister.reset();
      // const data = fs.readFileSync(`${__dirname}/app/data/db.json`, 'utf-8');
      // const dataObj = JSON.parse(data);
      // console.log(data);

      
    }

    postRegistration(){
      this.registrationList=[]
      let data={
        email:this.frmRegister.controls.email.value,
        password:this.frmRegister.controls.password.value,
        country : this.frmRegister.controls.selectcountry.value,
        termsncondition : this.frmRegister.controls.termsncondition.value,
      }
      debugger;
      this.registrationList.push(data)
     // this.output.emit(this.registrationList)
      this.policy.setRegData(data)      
      .subscribe(data => {
     this.router.navigate(['login']);
debugger;
        
      }, (err)=>{
        debugger;
      });

    }
  
}

