import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { MainComponent } from './main/main.component';
import { PartnersComponent } from './main/profile/partners/partners.component';
import { BlogComponent } from './main/blog/blog.component';
import { ContainersComponent } from './main/containers/containers.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { AppHttpClient } from './app.http';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { Navigate } from './app.navigate';
import { Message } from './app.message';
import { ProfileComponent } from './main/profile/profile.component';
import { DashboardComponent } from './main/profile/dashboard/dashboard.component';
import { OnePartnerComponent } from './main/profile/partners/one-partner/one-partner.component';
import { AddPartnerComponent } from './main/profile/partners/add-partner/add-partner.component';
import { AllPartnerComponent } from './main/profile/partners/all-partner/all-partner.component';

const appRoutes: Routes = [
  { path: '', component: AuthComponent },
  {
    path: 'main', component: MainComponent, children: [
      {
        path: 'profile', component: ProfileComponent, children: [
          { path: 'dashboard', component: DashboardComponent },
          {
            path: 'partner', component: PartnersComponent, children: [
              { path: 'all', component: AllPartnerComponent },
              { path: 'add', component: AddPartnerComponent },
              { path: 'one/:id', component: OnePartnerComponent },
            ]
          },
          { path: 'blog', component: BlogComponent },
        ]
      },
      { path: 'build', component: ContainersComponent }
    ]
  },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MainComponent,
    PartnersComponent,
    BlogComponent,
    ContainersComponent,
    NotFoundComponent,
    ProfileComponent,
    DashboardComponent,
    OnePartnerComponent,
    AddPartnerComponent,
    AllPartnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    SweetAlert2Module,
  ],
  providers: [AppHttpClient, Storage, Message, Navigate],
  bootstrap: [AppComponent]
})
export class AppModule { }
