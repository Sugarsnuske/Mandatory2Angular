import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../style/scss/header.component.scss']
})
export class HeaderComponent implements OnInit {
  toggleState = false;

  constructor() { }

  ngOnInit() {
  }

  toogleState(){
    console.log(this.toggleState);
    if(this.toggleState){
      this.toggleState = false;
    } else {
      this.toggleState = true;
    }
  }

}
