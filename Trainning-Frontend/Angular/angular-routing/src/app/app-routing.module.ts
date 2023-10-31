import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsListComponent } from './departments-list/departments-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';



const routes: Routes=[{path:'Employees',component :EmployeeListComponent},
{path:'Departments', component:DepartmentsListComponent},{path:'',redirectTo:'/home',pathMatch:'full'},{path:'home',component:HomeComponent},{path:'**',component:ErrorComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routeComponents =[EmployeeListComponent,DepartmentsListComponent,ErrorComponent,HomeComponent]