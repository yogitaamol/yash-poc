import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isShowNavBar = false;
  constructor(
    private router:Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get(" http://127.0.0.1:3000/customers").subscribe((res)=>{
debugger;

    }, (err)=>{
      debugger;
    })
  }

}
