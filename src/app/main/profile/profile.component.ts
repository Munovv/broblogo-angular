import { Component, OnInit } from '@angular/core';
import { AppHttpClient } from 'src/app/app.http';
import { Build } from 'src/app/app.models';
import { Navigate } from 'src/app/app.navigate';
import { Storage } from 'src/app/app.storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

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

    // this.storage.RemoveSession()
  }

  public Logout(): boolean {
    this.http.DownImageRequest(this.imagesBuild)

    return false
  }

}
