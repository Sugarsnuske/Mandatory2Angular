import { Component, OnInit, Input } from '@angular/core';

import { InternshipService } from './../internship.service';
import { InternshipListService } from './../internship-list.service';
import { InternshipListComponent } from './../internship-list.component';

@Component({
  selector: 'app-internship-details',
  templateUrl: './internship-details.component.html',
  styleUrls: ['./internship-details.component.scss'],
  providers: []
})
export class InternshipDetailsComponent implements OnInit {
  @Input() intern : any;
  update = false;
  isUpdated = false;
  details = "Details";
  deletePressed: boolean;
  isDeleted = false;

  constructor(
    private internshipListComponent : InternshipListComponent) {}

  ngOnInit() {}

  onDelete(){
      this.deletePressed = true;
      this.internshipListComponent.checkOpen(this, "delete");
  }

  onDetails(){
    if (this.update){
      this.update = false;
      this.details = "Details";
    } else {
      this.update = true;
      this.details = "Close";
      this.internshipListComponent.checkOpen(this, "details");
    }   
  }

  internDeleted() {
    this.isDeleted = true;
    console.log(this.isDeleted);
    setTimeout(() => {
      this.isDeleted = false;
      console.log(this.isDeleted);
    }, 4000);
    console.log("intern is deleted")
  }

  internUpdated() {
    this.update = false;
    this.details = "Details";
    this.isUpdated = true;
    setTimeout( () => {
      this.isUpdated = false;
    }, 4000 );
  }

}
