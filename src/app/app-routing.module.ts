import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent},
  { path: 'about', component: AboutComponent },
  { path: '', component: AboutComponent},
  { path: '', redirectTo: "", pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent},
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
/*{useHash:true}*/