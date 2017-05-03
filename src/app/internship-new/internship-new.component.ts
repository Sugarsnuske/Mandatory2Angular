import { Component, OnInit, ViewChild } from '@angular/core';
import { Response } from '@angular/http';
import { NgForm } from '@angular/forms';

import { InternshipService } from '../internship-list/internship.service';
import { InternshipListService } from '../internship-list/internship-list.service';


@Component({
  selector: 'app-internship-new',
  templateUrl: './internship-new.component.html',
  styleUrls: ['./internship-new.component.scss']
})
export class InternshipNewComponent implements OnInit {
  @ViewChild('f') internshipForm : NgForm;

  constructor(
    private internshipService: InternshipService,
    private internList: InternshipListService) { }

  ngOnInit() {
  }

  onSuggestTeacher(){
    const teacherInitials = 'Test';
    this.internshipForm.form.patchValue({
      initials: teacherInitials
    });
  }

  onSuggestAll(){
    this.internshipForm.form.setValue({
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
      miscellaneous: 'Maybe this field should be bigger'
    });
    
  }

  onSubmitInternshipForm(){
    // this.userInput.initials = this.internshipForm.value.initials;
    // this.internships.push({
      let value = this.internshipForm.value;
      let intern = {data : { 
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
            this.internList.internships.push(response.json());
            console.log(response);
            this.internshipForm.reset();
          }
        );
  }

  // private generateId() {
  //   const id = "5900933965daf6c0440b2d"
  //   return id + Math.round(Math.random() * 10000);
  // }


}
