import { Component, OnInit, Input, ViewChild } from '@angular/core';

import { InternshipService } from './../../internship.service';
import { InternshipListService } from './../../internship-list.service';

@Component({
  selector: 'app-internship-delete',
  templateUrl: './internship-delete.component.html',
  styleUrls: ['./internship-delete.component.scss']
})
export class InternshipDeleteComponent implements OnInit {
  @Input('internToBeDeleted') intern;
  @ViewChild('delteModal') modal;
  show = true;

  constructor(private internshipListService: InternshipListService,
              private internshipService: InternshipService
              ) { }

  ngOnInit() {
  }

  onDeletePressed() {
    // console.log(this.intern._id);
      
      this.internshipService.delete(this.intern._id)
      .subscribe(
        (response) => {
          console.log(response.headers);
          
          let i = this.internshipListService.internships.indexOf(this.intern);
          this.internshipListService.internships.splice(i, 1);
        },(error: Error) => console.log(error)
      );
  }

  test(){
    setTimeout(this.onDeletePressed(), 2000);
  }

}
