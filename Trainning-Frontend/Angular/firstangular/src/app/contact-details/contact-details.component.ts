import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent {
  firstName:string='Unknown';
  lastName:string='Unknown';
  age:number=22;
  email:string='unknown';
  phonenumber:number=0;
  joinStatus:boolean=true;
  location:string='Chennai';
  color:string='violet';
  size:number=1;
  styleclassname: string="bstyle";
  constructor(){
    console.log("component created/constructed");
  }
    ngOnInIt(){
      this.firstName='Deepthi';
      this.lastName="Mishra";
      this.age = 34 ;
      this.email="deepthiop28@gmail.com";
      console.log("contact details initialized");

    }
    ngOnChanges()
    {
      console.log("contact details changed");

    }
    ngDoCheck(){
      console.log("contact details verified");

    }
    ngOnDestroyed(){
      console.log("contact details destroyed");

    }
  }


