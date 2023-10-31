
var io=require('fs');

io.readFile('data.txt','utf8',function(err,lines){
    
    console.log(lines);
    console.log(lines.length);
});