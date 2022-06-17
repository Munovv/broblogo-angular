import { Component, OnInit } from '@angular/core';
import { Navigate } from '../app.navigate';
import { Storage } from '../app.storage';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private storage: Storage, private router: Navigate) { }

  ngOnInit(): void {
    if (this.storage.GetProfile() === null) {
      this.router.Location("/")
    }
  }

}
