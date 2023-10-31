import { useState } from "react";


function TeamDetailsWithUseState (){
    const[teamName , setTeamName] = useState("Delhi Capitals");
    const[teamCaptain,setCaptainNmae]= useState("David Warner");
    const[baselocation,setBaseLocation]=useState("New Delhi");
    
  function  validate(){
   let vstatus=false;
        if(teamCaptain=="")
            window.alert("Name cannot be blank");
        else
            vstatus=true;
        if(teamCaptain== "")
            window.alert("Captain name cannot be blank");
        else
            vstatus=true;
        return vstatus;
    }
        return<div>
            <center>
            <form action="javascript:window.alert('All ok')" onSubmit="return validate()">
                <label>Team Name</label>
                <input type="text" onChange={e=>setTeamName(e.target.value)} defaultValue={teamName}/><br></br>
                <label>Team Captain</label>
                <input type="text" onChange={e=>setCaptainNmae(e.target.value)} defaultValue={teamCaptain}/><br></br>
                <label>Base location</label>
                <select size="1" name="base_location"onChange={e=>setCaptainNmae(e.target.value)}  defaultValues={baselocation}>
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
  
               </select> <br></br>
               <input type="submit" value="Save"/>
            </form><br></br>
            <b>Team name</b>{teamName}<br></br>
            <b>team captain</b>{teamCaptain}<br></br>
            <b>Base Location:</b>{baselocation}<br></br>
            </center>
        </div>
    }

export default TeamDetailsWithUseState;