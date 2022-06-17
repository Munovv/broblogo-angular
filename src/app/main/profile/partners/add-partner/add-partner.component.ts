import { Component, OnInit } from '@angular/core';
import { AppHttpClient } from 'src/app/app.http';
import { Partner } from 'src/app/app.models';
import { Navigate } from 'src/app/app.navigate';

@Component({
  selector: 'app-add-partner',
  templateUrl: './add-partner.component.html',
  styleUrls: ['./add-partner.component.css']
})
export class AddPartnerComponent implements OnInit {
  public partner = new Partner()

  constructor(private router: Navigate, private http: AppHttpClient) { }

  ngOnInit(): void {
  }

  public AddPartner(): false {
    this.http.CreatePartnerRequest(this.partner)
    this.partner = new Partner()

    return false
  }

}
