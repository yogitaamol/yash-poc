import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";

@Component({
  selector: 'app-cutomerlist',
  templateUrl: './cutomerlist.component.html',
  styleUrls: ['./cutomerlist.component.css']
})
export class CutomerlistComponent implements OnInit {
 
  customerList: any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/customers')
    .subscribe(data => {
      this.customerList=data;
      console.log(this.customerList)});
    
    
  }

}
