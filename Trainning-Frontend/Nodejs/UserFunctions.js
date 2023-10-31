readinput=require('readline-sync');
function validate(empname,empage){
    if(empname.length<5 )
    console.log("lenght of name must be minimum 5 charecters");
    if(empage<18)
    console.log('you are not eligible labour work');
 
}

function callValidate(valdata){
   

console.log('Enter your name')
ename=readinput.question();
console.log('Enter your age')
eage=readinput.question();
valdata(ename,eage);
}
console.log("beginning");
callValidate(validate);

