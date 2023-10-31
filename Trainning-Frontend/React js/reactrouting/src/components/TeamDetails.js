import { Component } from "react";

class TeamDetails extends Component{
    teamName="Delhi Capitals";
    baselocation="New Delhi";
    teamCaptain="YTA"
    componentDidMount(){
        console.log("Team Details components mounted");
    }
    componentDidUpdate(){
        console.log("Teamdetails components has been updated");
    }
    componentWillUnmount(){
        console.log('team details component is unmounting');
    }
    render(){
        return<div><center>
            <form>
                <label>Team Name</label>
                <input type="text" defaultValue={this.teamName}/><br></br>
                <label>Team Captain</label>
                <input type="text" defaultValue={this.teamCaptain}/><br></br>
                <label>Base location</label>
                <select size="1" name="base_location" defaultValue={this.baselocation}>
                    <option value="MI">mumbai</option>
                    <option value="CSK">chennai</option>
                    <option value="RR">rajasthan</option>
                    <option value="KXIP">kolkata</option>
                    <option value="DD">dehradun</option>
                    <option value="DC">durgapur</option>
                    <option value="RPS">pune</option>
                    <option value="RCB">Bangalore Utds</option>
                    <option value="SRH">Delhi Capitals</option>
                    <option value="KKR">Chandigarh</option>
  
               </select> 
            </form></center>
        </div>
    }
}
export default TeamDetails;