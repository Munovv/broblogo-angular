import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from "@angular/router"
import { AuthModel } from '../app.models';
import { AppHttpClient } from '../app.http';
import { Navigate } from '../app.navigate';
import { Storage } from '../app.storage';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public authForm: AuthModel = new (AuthModel)

  constructor(
    private http: AppHttpClient,
    private storage: Storage,
    private router: Navigate
  ) { }

  ngOnInit(): void {
    if (this.storage.GetProfile() !== null) {
      this.router.Location("/main/build")
    }
  }

  public authorize(): boolean {
    this.http.AuthorizeRequest(this.authForm)

    return false
  }
}
