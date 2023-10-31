readinput=require('readline-sync')
add = function(n1,n2){
    return n1+n2;
}

function multiply(n1,n2){
    return n1*n2;
}

function calculate(c){
    console.log("Enter 2 values");
    v1= Number(readinput.question());
    v2=Number(readinput.question());
    console.log(c(v1,v2));
}
calculate(multiply);
calculate(add);