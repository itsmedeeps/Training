var exp=require('express');//import exp js into environment
var proc=require('process');
var bparser=require('body-parser');
var expenv=exp();//initialise the environment  for exp js //javascript is used
expenv.use(bparser.urlencoded({extended:false}));
var path=require('path');
var visitorCount=0;
//when the client sends the get request with url ending with / , then welcome fn is called.

//welcome() sends the dynamic html page as response

//request - represents the request that client is sending to server

//response - represents the response from server to client

expenv.get('/' ,welcome)//URI mapping .linking a URI with a function

function welcome(request,response)

{
    var str="<html><body>";//dynamic html

    str +="<b>First Website in ExpressJS</b><br>";

    visitorCount++;

    str += "<b>You are visitor # </b>" +visitorCount;

    var today=new Date();

    str += "<br><b> Today : </b>" + today +"<BR>";
    str+="<br><a href='/login'>Click me to login </a>"
    str +="</body></html>";
    response.send(str);//sends the response back to the caller
}
expenv.post('/signin', authenticate)
function authenticate (request,response)
{
    console.log("Authenticating..");
    
    var users=[{username:'Haritha',password:'hari1234'},

    {username:'Jyoti',password:'1234'},

    {username:'Leena',password:'4567'},

    {username:'Kamal',password:'6789'}]

    var result=false;
    var uname=request.body.userID;
    var upwd=request.body.password;
    for(i in users)
    {

    if (uname == users[i].username && upwd == users[i].password)

    result=true;

    break;

    }
    if(result==true)

    response.send("<b>Welcome..</b>")
else
    response.send
("<b>Invalid username/password </b><br><br><a href='/login'>Retry logging in...</a> ")
}
//first we create the login form and then we are calling the signin
expenv.get('/login', loginForm)
function loginForm (reqest,response)
{
 console.log("Displaying Login Form");
 //response.sendFile(path.join(__dirname, './loginform.html'));[OR]
 response.sendFile(__dirname + '/loginform.html');//_dirname represents current working directory
}
//blocking mode - waits for incoming req from port 7800 on the local machine

expenv.listen(proc.argv[2],"localhost");
console.log("started the server #"+proc.argv[2]);

