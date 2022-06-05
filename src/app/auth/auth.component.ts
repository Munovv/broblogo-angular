import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from "@angular/router"

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authForm: any = {
    username: '',
    password: ''
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('broblogoUser') !== null) {
      this.location('/main')
    }
  }

  location(url: string): void {
    this.router.navigate([url]);
  }
}
