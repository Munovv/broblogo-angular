import { Component, OnInit } from '@angular/core';
import { AppHttpClient } from 'src/app/app.http';

@Component({
  selector: 'app-all-partner',
  templateUrl: './all-partner.component.html',
  styleUrls: ['./all-partner.component.css']
})
export class AllPartnerComponent implements OnInit {

  public partners: any = [
    {
      id: "",
      name: "",
      location: "",
      description: "",
    }
  ]

  constructor(private http: AppHttpClient) { }

  ngOnInit(): void {
     this.getPartners()
  }

  public DeletePartner(id: string, index: number): boolean {
    this.http.DeletePartnerRequest(id)
    this.partners.splice(index, 1)

    return false
  }

  private async getPartners(): Promise<any> {
    this.partners = await this.http.GetAllPartnersRequest()
  }

}
