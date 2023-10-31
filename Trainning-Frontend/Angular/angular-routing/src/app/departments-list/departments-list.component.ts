import { Component } from '@angular/core';

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.css']
})
export class DepartmentsListComponent {
  deptlist : any=[{deptId :'PR',deptName:'public relations'},
  {deptId :'RD',deptName:'Research and development'},
  {deptId :'HR',deptName:'human resources'}]

}
