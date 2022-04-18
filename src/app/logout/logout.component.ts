import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
public firstName:any;
public lastName:any;
public email:any;
public dob:any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.firstName=localStorage.getItem('firstName')
    this.lastName=localStorage.getItem('lastName')
    this.email=localStorage.getItem('email')
    this.dob=localStorage.getItem('dob')
  }
logout()
{
  this.router.navigate([`./reg`])
}
}
