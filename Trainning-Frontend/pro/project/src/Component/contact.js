import { Component } from "react";

class Contact extends Component{
    
    render(){
        return<div><center>
            <form>
                <label>First Name</label>
                <input type="text" value={this.firstName}/><br></br>
                <label>Last Name</label>
                <input type="text" value={this.lastName}/><br></br>
                <label>email</label>
                <input type="text" value={this.email}/><br></br>
            </form></center>
        </div>
    } 
}
export default Contact;