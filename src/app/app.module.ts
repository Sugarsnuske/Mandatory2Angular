import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InternshipListComponent } from './internship-list/internship-list.component';
import { InternshipDetailsComponent } from './internship-list/internship-details/internship-details.component';

/* Application-wide when in the app.module */
import { InternshipService } from './internship-list/internship.service';
import { InternshipListService } from './internship-list/internship-list.service';

@NgModule({
  declarations: [
    AppComponent,
    InternshipListComponent,
    InternshipDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [InternshipService, InternshipListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
