import { Component, OnInit, ViewChild } from '@angular/core';
import { Response } from '@angular/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { InternshipService } from '../internship-list/internship.service';
import { InternshipListService } from '../internship-list/internship-list.service';


@Component({
  selector: 'app-internship-new',
  templateUrl: './internship-new.component.html',
  styleUrls: ['../style/scss/internship-new.component.scss']
})
export class InternshipNewComponent implements OnInit {
  // @ViewChild('f') internshipForm : NgForm;
  internshipForm;
  internCreated = false;
  internForm : FormGroup;

  constructor(
    private internshipService: InternshipService,
    private internList: InternshipListService) { }

  ngOnInit() {
    this.internForm = new FormGroup({
      'initials': new FormControl(null, [Validators.required, Validators.minLength(2)]),
      'name': new FormControl(null, Validators.required),
      'visitDate': new FormControl(null, Validators.required),
      'IDOfInternship': new FormControl(null, Validators.required),
      'companyName': new FormControl(null, Validators.required),
      'companyPerson': new FormControl(null),
      'companyTrends': new FormControl(null),
      'companyQualification': new FormControl(null),
      'studentQualification': new FormControl(null),
      'cooperation': new FormControl(null),
      'miscellaneous': new FormControl(null)
    });
  }

  onSuggestTeacher(){
    const teacherInitials = 'Test';
    this.internForm.patchValue({
      initials: teacherInitials
    });
  }

  onSuggestAll(){
    this.internForm.setValue({
      initials: 'AT',
      name: 'Mark Zuckerberg',
      visitDate: '2017-05-03',
      IDOfInternship: '003473823',
      companyName: 'Arctic Monkeys',
      companyPerson: 'Alex Turner',
      companyTrends: 'Do I Wanna Know?',
      companyQualification: '5 Stars',
      studentQualification: 'Should study more music',
      cooperation: 'Domino',
      miscellaneous: 'Bla bla bla blabla'
    });
    
  }

  onSubmitInternshipForm(){
      let value = this.internForm.value;
      let intern = { data : { 
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
            this.internshipCreated();
            this.internList.internships.push(response.json());
            console.log(response);
            this.internForm.reset();
          }
        );
  }

  internshipCreated(){
    this.internCreated = true;
    setTimeout(() => {
      this.internCreated = false;
    }, 3000);
  }

  // private generateId() {
  //   const id = "5900933965daf6c0440b2d"
  //   return id + Math.round(Math.random() * 10000);
  // }


}
