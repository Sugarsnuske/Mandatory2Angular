import { Response } from '@angular/http';
import { Component, OnInit, ViewChild, Input, Output } from '@angular/core';
import { 
    FormGroup, 
    ReactiveFormsModule, 
    FormBuilder, 
    Validators, 
    FormControl, 
    NgForm
} from '@angular/forms';

import { InternshipService } from './internship.service';
import { InternshipListService } from './internship-list.service';
import { InternshipDetailsComponent } from './internship-details/internship-details.component';
import { SearchBox } from './search-box';

@Component({
  selector: 'app-internship-list',
  templateUrl: './internship-list.component.html',
  styleUrls: ['../style/scss/internship-list.component.scss'],
  providers: []
})
export class InternshipListComponent implements OnInit {
  @Output() interns : any [];
  @ViewChild('f') internshipForm : NgForm;
  detailsOpen : any;
  internToDelete: any;
  intern: any;
  internDeleted;

  constructor(
    private internshipService: InternshipService,
    private internshipListService: InternshipListService) { }

  ngOnInit() {
    this.interns = this.internshipListService.internships
  }

  /* Check if any listItem is open and close if other one is open */
  checkOpen(el: any, state: string) {
    if (this.intern != el && this.intern != undefined){
      this.intern.update = false;
      this.intern.details = "Details"
      if(state === "delete"){
        this.intern.deletePressed = false;
      }
    }
    this.intern = el;
    console.log(this.intern);      
  }
  
}
