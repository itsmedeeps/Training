export class EmpManagementService{
    status:Boolean=false;
   // rec:any=null;
    addEmp(emp:any, emplist:any){
        this.status=false
       for(let i in emplist){
        if(emp.empId==emplist[i].empId)
       this. status=true;

       }
       if(this.status)
        window.alert("thus employee is already exist");
        else 
      emplist.push({empId:emp.empId,firstName:emp.firstName,lastName:emp.lastName,age:emp.age,
            location:emp.location});
            alert("one employee")

    }
    deleteEmp(eId:any,emplist:any){
        
        for(let i in emplist){
            console.log(emplist[i].empId);
            if(eId == emplist[i].empId)
            //splice(indexposition , no of elememts to delete from indrex position)
            emplist.splice(i,1);


        }

       


    }
    updateEmp(){

    }

}