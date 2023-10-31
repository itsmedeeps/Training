import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstName:string="unknown";
  lastName:string="unknown";
  age:number=22;
  gender:string="female";
  favColor: string="blue";
  isEnabled :boolean=true;
  isDisplayed:boolean=true;
  YesNo:boolean=true;
  location:string="Jaipur";
  salary:number=1000;
  favTheme:string="theme3";
  title='databinding';
  background:boolean=true;

  names :string[]=["mhfgj","jhtfj","hfdxf","jyfjy","wqszas","ewqrweretrrrrrrrrrrrrrrrrr"]

  save(){
    var message="Thanks you Mr/Ms"+this.firstName+" "+this.lastName;
    message+=".Your message will be processed shortly.";
    window.alert(message);
  }
  verifyFirstName (obj: any){
    if(obj.target.value=="")
    window.alert("first name should nt be empty");

  }
  
}
