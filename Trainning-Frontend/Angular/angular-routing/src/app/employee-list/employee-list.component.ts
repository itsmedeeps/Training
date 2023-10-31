import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  emplist : any=[{empId :100 ,firstName:'Deepthi' ,lastName :'op'},
  {empId :100 ,firstName:'Dhinesh' ,lastName :'kumar'},
  {empId :23456789 ,firstName:'Ramesh' ,lastName :'ddavc'},
  ];
}
