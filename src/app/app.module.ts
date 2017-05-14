import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InternshipListComponent } from './internship-list/internship-list.component';
import { InternshipDetailsComponent } from './internship-list/internship-details/internship-details.component';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

/* Application-wide when in the app.module */
import { InternshipService } from './internship-list/internship.service';
import { InternshipListService } from './internship-list/internship-list.service';
import { InternshipNewComponent } from './internship-new/internship-new.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

/* Routings */
const appRoutes: Routes = [
   { path: '', component: HomeComponent},
   { path: 'internship-list', component: InternshipListComponent },
   { path: 'internship-new', component: InternshipNewComponent},
   { path: '**', component: PageNotFoundComponent } 
];


@NgModule({
  declarations: [
    AppComponent,
    InternshipListComponent,
    InternshipDetailsComponent,
    InternshipNewComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [InternshipService, InternshipListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
