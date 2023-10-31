import { Component } from '@angular/core';

import {HttpClient} from '@angular/common/http'

import { User } from './User';
import axios from 'axios';

@Component({

  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']

})

export class AppComponent {

  title = 'usermanagement';

  // HttpClient are injectable class that means it automatically created and inject in to the code. Creating the constructor

  // UserID: string="unknown";

  // password: string="unknown";

  // constructor(private hclient: HttpClient){

 

  // }

  // tryAuthenticate(){

  //   window.alert("Contacting the backend");

  //   this.hclient.get("http://localhost:7400");

  // }

 

  // Instructing angular to create an object for User class

  constructor(public user: User){

 

  }

 

  addAUser(){
    axios.post("http://localhost:7000/addUser", this.user,
    {headers:{'content-Type':'application/json'}})

    window.alert("Trying to add a user");
 

  }

 

}

 