import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgSwitch } from '@angular/common';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';

import { SecretService } from './secret/secret.service';
import { RandomAppsComponent } from './random-apps/random-apps.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    PageNotFoundComponent,
    AboutComponent,
    RandomAppsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [ SecretService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
