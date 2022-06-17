import { Component, OnInit } from '@angular/core';
import { AppHttpClient } from 'src/app/app.http';
import { Navigate } from 'src/app/app.navigate';
import { Storage } from 'src/app/app.storage';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public imagesBuild: any = {
    images: []
  }

  constructor(
    private http: AppHttpClient,
    private storage: Storage,
    private router: Navigate
  ) { }

  ngOnInit(): void {
    if (this.storage.GetSession() === null) {
      this.router.Location("/main/build")
      return
    }

    this.imagesBuild = this.storage.GetSession()

    console.log(this.imagesBuild)
  }

}
