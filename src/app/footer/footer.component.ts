import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../policy.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  intervalId=0;
  constructor(private policy : PolicyService) { }

  ngOnInit(): void {
    debugger;
    setInterval(()=>{
      
       const str =sessionStorage.getItem("interval");

      this.intervalId= str ?  +str  + 1:   this.intervalId +1;
      sessionStorage.setItem("interval", this.intervalId.toString())
      if(this.intervalId>=100){
        this.policy.logout();
      }
    }, 1000)
    setTimeout(()=>{
this.policy.logout();
    }, 1000*100)
  }




}
