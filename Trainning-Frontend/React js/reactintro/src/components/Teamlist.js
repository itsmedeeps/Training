import { Component } from 'react';
import './Teamlist.css';

class Teamlist extends Component{
teamCount=11;
render(){
    return(
        <div className='Teamlist'>
        <center ><b>List of teams of IPL in 2023</b><br></br>
        <b>Count of teams</b>{this.t}
       
        <ul>
            <li>CSK</li>
            <li>MI</li>
            <li>RCB</li>
            <li>SRH</li>
            <li>LSG</li>
            <li>RR</li>
            <li>KKR</li>
        </ul>
        </center></div>
    );
}
}
export default Teamlist;