import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Response } from '@angular/http';

import { InternshipService } from '.././../internship.service';
import { InternshipListService } from '.././../internship-list.service';
import { InternshipListComponent } from '.././../internship-list.component';

@Component({
  selector: 'app-internship-edit',
  templateUrl: './internship-edit.component.html',
  styleUrls: ['./internship-edit.component.scss']
})
export class InternshipEditComponent implements OnInit {
  @ViewChild('f') internshipForm : NgForm;
  @Input() intern: any;
  update = false;
  deletePressed: boolean;
  details = "Details";
  isDeleted = false;
  @Output() onInternUpdated = new EventEmitter<any>();

  
  //internship properties
  id;
  initials = "initials"; name = "name" ; visitDate = "visitDate"; 
  IDOfInternship = "IDOfInternship"; companyName = "companyName"; 
  companyPerson = "companyPerson"; companyTrends = "companyTrends"; 
  companyQualification = "companyQualification"; 
  studentQualification = "studentQualification"; 
  cooperation = "cooperation"; miscellaneous = "miscellaneous";
  
  internshipToBeUpdated : any = [
    this.initials,
    this.name,
    this.visitDate,
    this.IDOfInternship,
    this.companyName,
    this.companyPerson,
    this.companyTrends,
    this.companyQualification,
    this.studentQualification,
    this.cooperation,
    this.miscellaneous
  ];

  constructor(
    private internshipService: InternshipService,
    private internshipListService: InternshipListService,
    private internshipListComponent : InternshipListComponent) {}

  ngOnInit() {
    this.id = this.intern._id;
    for(let i = 0; i < this.internshipToBeUpdated.length; i++){
      this.checkUndefined(this.internshipToBeUpdated[i], i);
    }
  }

  /* Check if   */
  checkUndefined(state : any, index : number) {
    let check = this.intern;
    let placeholder = "this.intern.data." + state;
    if(typeof(check.data) != "undefined"){
      if((typeof(eval(placeholder))) != "undefined"){
        this.internshipToBeUpdated[index] = eval(placeholder);
      }
    } else {
      this.internshipToBeUpdated[index] = '';
    }
  }

  onEdit(){
    this.intern.data.initials = this.internshipToBeUpdated[0];
    this.intern.data.name = this.internshipToBeUpdated[1];
    this.intern.data.visitDate = this.internshipToBeUpdated[2];
    this.intern.data.IDOfInternship = this.internshipToBeUpdated[3];
    this.intern.data.companyName = this.internshipToBeUpdated[4];
    this.intern.data.companyPerson = this.internshipToBeUpdated[5];
    this.intern.data.companyTrends = this.internshipToBeUpdated[6];
    this.intern.data.companyQualification = this.internshipToBeUpdated[7];
    this.intern.data.studentQualification = this.internshipToBeUpdated[8];
    this.intern.data.cooperation = this.internshipToBeUpdated[9];
    this.intern.data.miscellaneous = this.internshipToBeUpdated[10];
  }

  onUpdate() {
    this.onEdit();

    this.internshipService.put(this.intern)
      .subscribe(
        (response : Response) => {
          console.log(response);
          this.onInternUpdated.emit();
        }
      )
  }


}
