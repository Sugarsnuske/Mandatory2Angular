import { Response } from '@angular/http';
import { Component, OnInit, ViewChild, Output } from '@angular/core';
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

@Component({
  selector: 'app-internship-list',
  templateUrl: './internship-list.component.html',
  styleUrls: ['./internship-list.component.scss'],
  providers: []
})
export class InternshipListComponent implements OnInit {
  @Output() interns : any [];
  @ViewChild('f') internshipForm : NgForm;
  

  constructor(
    private internshipService: InternshipService,
    private internshipListService: InternshipListService) { }

  ngOnInit() {
    this.interns = this.internshipListService.internships
    // this.internshipService.get()
    //   .subscribe(
    //     (interns: any[]) => {
    //       this.internshipListService.internships = interns
    //       this.interns = this.internshipListService.internships    
    //       console.log(this.interns);  
    //     }
    //   );
  }
  
}
