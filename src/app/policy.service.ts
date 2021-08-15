import { Injectable } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { BehaviorSubject, Observable, Observer } from 'rxjs';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  public regData!: BehaviorSubject<any>

public currentUserValue : any;

  
  constructor(private httpClient: HttpClient,
    private router: Router
    
    ) {
      debugger;
    const userLogindataString: string  | undefined | any=      sessionStorage.getItem("userLogindata");
    if(!userLogindataString){

this.regData=new BehaviorSubject(null);
    }

    else {
const userLogindata=JSON.parse(userLogindataString);
this.currentUserValue=userLogindata;
this.regData=new BehaviorSubject(userLogindata);

    }


   }

   logout(){
    sessionStorage.removeItem("userLogindata");
    sessionStorage.removeItem("interval");
    this.regData.next(null);
    this.router.navigate(['login']);
   }

  
  
  setRegData(_data: any){

    return new Observable((o: Observer<any>)=>{
       const userdataString: string  | undefined | any=      localStorage.getItem("userdata");
       if(!userdataString){
        const userArray: Array<any>=[];
        userArray.push(_data);
        localStorage.setItem("userdata", JSON.stringify(userArray));
       }else {
         const userArray: Array<any> | any = JSON.parse(userdataString);
         userArray.push(_data);
         localStorage.setItem("userdata", JSON.stringify(userArray))
       }
        o.next(_data);
    })
    ///return this.httpClient.get(this.SERVER_URL + 'customers');
   // console.log(_data);
  }




  login(_data: any){
return new Observable((o: Observer<any>)=>{
debugger;
  this.httpClient.post("http://127.0.0.1//users/authenticate", _data)
  .subscribe((res)=>{
    this.currentUserValue=res;
    sessionStorage.setItem("userLogindata", JSON.stringify(this.currentUserValue));
    this.regData.next(this.currentUserValue);
    o.next(this.currentUserValue);
  }, (err)=>{
     o.error(err);
  });
})




  }
  getRegData(){
    return this.regData.asObservable();
  }

  public getDetails(){ 
       return '' ;// this.httpClient.get(this.SERVER_URL + 'formsdetails');
  }

  // public getDetails(email: any){
  //      return this.httpClient.get(`${this.SERVER_URL + 'formsdetails'}/${email}`); 
  // }
  public createDetails(policy: {email: string, password: string, country: string, termsncondition: string}){
      return '';// this.httpClient.post(`${this.SERVER_URL + 'formsdetails'}`, formsdetails)
  }

  // public deletePolicy(policyId: any){
  //     return this.httpClient.delete(`${this.SERVER_URL + 'policies'}/${policyId}`)
  // }
  // public updatePolicy(policy: {id: number, amount: number, clientId: number, userId: number, description: string}){
  //     return this.httpClient.put(`${this.SERVER_URL + 'policies'}/${policy.id}`, policy)
  // }


 
}

function formsdetails(arg0: string, formsdetails: any) {
  throw new Error('Function not implemented.');
}

