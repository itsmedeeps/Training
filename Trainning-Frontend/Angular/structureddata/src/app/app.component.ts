import { Component } from '@angular/core';
import{EmpManagementService } from './EmpManagementService';
import { ProjectMgtServiceService } from './project-mgt-service.service';
 

@Component({

  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css'],
  providers:[ProjectMgtServiceService]

})

export class AppComponent {

  title = 'structureddata';
  eId:number=1;
  constructor( private PmMgtSvc:ProjectMgtServiceService){

  }

    emplist=[

      {empId:1,firstName:"Pavan", lastName:"Reddy", age:22, location:"Chennai"},

      {empId:2,firstName:"Janakiraman", lastName:"Bhupathi", age:22, location:"Chennai"},

      {empId:3,firstName:"Sona", lastName:"Venkatesan", age:22, location:"Chennai"}  

    ];

 

  emp = {empId:5,firstName:"Kamal", lastName:"Anand", age:22, location:"Chennai"};

/*   firstName:string="Unknowm";
  lastName:string="Unknowm";
  age:number=22;
  location:string="Unknowm"  */

  empvc: EmpManagementService =new EmpManagementService();

  addEmp(){

    this.empvc.addEmp(this.emp,this.emplist);

    alert("One Employee Added.....");

  }

  deleteEmp(){
    this.empvc.deleteEmp(this.eId,this.emplist);

  }
  addProject(){
    this.PmMgtSvc.addProject();
  }
  forLoops(){
    for (let i in this.emplist)
    console.log(i+"/t"+this.emplist[i].firstName,this.emplist[i].lastName);

    for(let i of this.emplist)
    console.log(i.empId+","+i.firstName)
  }

}