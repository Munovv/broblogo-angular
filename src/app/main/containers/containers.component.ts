import { Component, OnInit } from '@angular/core';
import { AppHttpClient } from 'src/app/app.http';
import { Build } from 'src/app/app.models';
import { Navigate } from 'src/app/app.navigate';
import { Storage } from 'src/app/app.storage';

@Component({
  selector: 'app-containers',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.css']
})
export class ContainersComponent implements OnInit {
  public isBuild: boolean = false

  public book: boolean = true
  public blog: boolean = true
  public card: boolean = true
  public partner: boolean = true

  public indicator: number = 1

  constructor(
    private http: AppHttpClient,
    private storage: Storage,
    private router: Navigate
  ) { }

  ngOnInit(): void {
    if (this.storage.GetSession() !== null) {
      this.router.Location("/main/profile/dashboard")
    }
  }

  public build(): boolean {
    let services = this.buildRequestBody()
    this.isBuild = true

    this.http.ComposeImageRequest(services)
    this.printLoadBar()

    return false
  }

  public Logout(): boolean {
    this.storage.RemoveProfile()
    this.router.Location("/")

    return false
  }

  private buildRequestBody(): Build {
    let build = new Build()
    build.data = []

    if (this.book) {
      build.images.push("book-service")
      build.data.push({url: "book", name: "Book service"})
    }

    if (this.blog) {
      build.images.push("blog-service")
      build.data.push({url: "blog", name: "Blog service"})
    }

    if (this.card) {
      build.images.push("card-service")
      build.data.push({url: "card", name: "Card service"})
    }

    if (this.partner) {
      build.images.push("partner-service")
      build.data.push({url: "partner", name: "Partner service"})
    }

    return build
  }

  private async printLoadBar() {
    while (this.indicator <= 99) {
      await this.sleep(50)
      this.indicator++
    }
  }

  private sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}

