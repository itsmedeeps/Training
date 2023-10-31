import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularpipes';
  firstName:string="Deepthi";
  lastName:string="OP";
  joinDate: any=new Date();
  salary: number=20000;
  currencysymbol:string="INR";
}
