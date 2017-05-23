import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

import { InternshipService } from './../../internship.service';
import { InternshipListService } from './../../internship-list.service';

@Component({
  selector: 'app-internship-delete',
  templateUrl: './internship-delete.component.html',
  styleUrls: ['../../../style/scss/internship-delete.component.scss']
})
export class InternshipDeleteComponent implements OnInit {
  @Input('internToBeDeleted') intern;
  isDeleted = false;
  @Output() onInternDeleted = new EventEmitter<any>();

  constructor(private internshipListService: InternshipListService,
              private internshipService: InternshipService,
              private router : Router,
              private route: ActivatedRoute
              ) { }

  ngOnInit() {
    console.log(this.intern);
  }

  onDeletePressed() {
    // console.log(this.intern._id);
      
      this.internshipService.delete(this.intern._id)
      .subscribe(
        (response : Response) => {
          this.onInternDeleted.emit();
          setTimeout(() => {
            let i = this.internshipListService.internships.indexOf(this.intern);
            this.internshipListService.internships.splice(i, 1);
          }, 3000);
        },(error: Error) => console.log(error)
      );
  }
}
