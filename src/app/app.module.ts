import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { MainComponent } from './main/main.component';
import { PartnersComponent } from './main/partners/partners.component';
import { BlogComponent } from './main/blog/blog.component';
import { ContainersComponent } from './main/containers/containers.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  {path: '', component: AuthComponent},
  {path: 'main', component: MainComponent, children: [
    {path: 'partners', component: PartnersComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'build', component: ContainersComponent}
  ]},
  {path: '**', component: NotFoundComponent}
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
