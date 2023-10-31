//fs  file system

var io=require('fs');

var readLine=require('readline-sync')

var line="";

var cmt=0;

while(cmt < 5)

{

    console.log('Enter line1 ');

    line=readLine.question();
    line+='\n'
    //io.writeFile('doc.txt',line,displayStatus);//overwrites data
    io.appendFileSync('doc.txt',line);//adds data 
    cmt++;

}

 

function displayStatus()

{

    console.log('wrote' + cmt +'to a file...');

}

 


