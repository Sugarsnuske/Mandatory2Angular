import { Response } from '@angular/http';
import { Component, OnInit, ViewChild } from '@angular/core';
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

@Component({
  selector: 'app-internship-list',
  templateUrl: './internship-list.component.html',
  styleUrls: ['./internship-list.component.scss'],
  providers: []
})
export class InternshipListComponent implements OnInit {
  interns : any [];
  @ViewChild('f') internshipForm : NgForm;
  userInput : {
    initials: ''
  };

  constructor(
    private internshipService: InternshipService,
    private internshipListService: InternshipListService) { }

  ngOnInit() {
    this.internshipService.get()
      .subscribe(
        (interns: any[]) => {
          this.internshipListService.internships = interns
          this.interns = this.internshipListService.internships
          console.log(this.interns);  
        }
      );
  }

  onDelete(el : any) {
    console.log(el._id);
    this.internshipService.delete(el._id)
      .subscribe(
        (response : Response) => {
          console.log(response.headers);
          
          let i = this.internshipListService.internships.indexOf(el);
          this.internshipListService.internships.splice(i, 1);
          this.interns = this.internshipListService.internships;
        }
      );
  }

  onUpdate(el : any) {
    this.internshipService.put(el)
      .subscribe(
        (response : Response) => {
          console.log(response);
        }
      )
  }
  
}
