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

@Component({
  selector: 'app-internship-list',
  templateUrl: './internship-list.component.html',
  styleUrls: ['./internship-list.component.scss'],
  providers: []
})
export class InternshipListComponent implements OnInit {
  internships : any[];
  @ViewChild('f') internshipForm : NgForm;
  userInput : {
    initials: ''
  };

  constructor(private internshipService: InternshipService) { }

  ngOnInit() {
    this.internshipService.get()
      .subscribe(
        (interns: any[]) => {
          this.internships = interns
          console.log(this.internships);  
        }
      );
  }

  onSuggestTeacher(){
    const teacherInitials = 'Test';
    const teacherName = 'Test Testesen';
    this.internshipForm.form.patchValue({
      initials: teacherInitials,
      name: teacherName,
    });
  }

  onSubmitInternshipForm(){
    // this.userInput.initials = this.internshipForm.value.initials;
    // this.internships.push({
      let value = this.internshipForm.value;
      let intern = {_id : this.generateId(), data : { 
        initials : value.initials,
        name : value.name,
        visitDate : value.visitDate,
        IDOfInternship: value.IDOfInternship,
        companyName : value.companyName,
        companyPerson : value.companyPerson,
        companyTrends : value.companyTrends,
        companyQualification : value.companyQualification,
        studentQualification : value.studentQualification,
        cooperation : value.cooperation,
        miscellaneous : value.miscellaneous
      } }
      console.log(intern);
      this.internshipService.post(intern)
        .subscribe(
          (response : Response) => {
            this.internships.push(response.json());
            console.log(response);
            this.internshipForm.reset();
          }
        );
  }

  onDelete(el : any) {
    console.log(el._id);
    this.internshipService.delete(el._id)
      .subscribe(
        (response : Response) => {
          console.log(response);
          let i = this.internships.indexOf(el);
          this.internships.splice(i, 1);
        }
      );
  }

  onUpdate(el : any) {
    this.internshipService.put(el)
      .subscribe(
        (response : Response) => {
          console.log(response);
        }, (error : Response ) => console.log(error)
      )
  }

  private generateId() {
    const id = "5900933965daf6c0440b2d"
    return id + Math.round(Math.random() * 10000);
  }
}
