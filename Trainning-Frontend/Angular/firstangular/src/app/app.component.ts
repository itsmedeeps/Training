import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<b>Welcome to first angular</b>
  <div style="text-align: center;font-size: 16px;">
    <b>Wlcome Mr/Ms</b>{{firstName}}<br>
    <b>Your location</b>{{location}}<br>
    <b>Angular start date</b>{{startDate}}<br>
  </div>
  <router-outlet></router-outlet>`,
  styles: [`b{color:red;font-size:25}`]
})
export class AppComponent {
  title = 'My Firstangular';
  firstName='Deepthi';
  lastName='OP';
  location='chennai';
  startDate=new Date();


}
