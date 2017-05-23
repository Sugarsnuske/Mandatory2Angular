import { InternshipListService } from './internship-list/internship-list.service';
import { InternshipService } from './internship-list/internship.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./style/scss/app.component.scss']
})
export class AppComponent implements OnInit{ 
  title = 'app works!';

  constructor(private internshipService: InternshipService,
              private internshipListService: InternshipListService) {}

  ngOnInit() {
        this.internshipService.get()
      .subscribe(
        (interns: any[]) => {
          this.internshipListService.internships = interns
          console.log(this.internshipListService.internships);
        }, (error: Error) => console.log(error)
      );
    }

}
