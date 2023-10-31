import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {EmpManagementService } from  './EmpManagementService';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectMgtServiceService } from './project-mgt-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [EmpManagementService,ProjectMgtServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
