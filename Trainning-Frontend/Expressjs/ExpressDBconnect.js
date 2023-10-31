var exp = require('express')// import expressjs into the application

var expenv = exp(); //Initialize the environment for Express JS app

var bparser=require('body-parser')

var my_sql = require('mysql');
var cors=require('cors');

expenv.use(bparser.json());
expenv.use(cors());
// var mysqlconn = my_sql();

expenv.use(bparser.urlencoded({extented : true}))


var proc = require('process')

var path = require('path');

var visitorCount = 0;

var mysql_conn=my_sql.createConnection({host: 'localhost', port: 3306, user: 'root', password:'Dd200128',database:'world'})

mysql_conn.connect();

console.log("Connected to database")
console.log(mysql_conn.statistics);
console.log(mysql_conn.state);

function processResults(error,results){
   for (i in results ){
    console.log(JSON.stringify(results[i]));
   }
}
expenv.post('/signin', authenticate)

function authenticate(request,response){

    console.log("Authenticating...");

    mysql_conn.query('SELECT   * from users',processResults);
   

}
expenv.post("/addUser",addNewUser)
function addNewUser(request,response){
var uid=request.body.userID;
var Upwd=request.body.password;
var uemail=request.body.emailID;
console.log("*****"+uid+"\t\t"+upwd+"\t\t"+uemail);
var ins="insert into users values('"+uid+"','"+Upwd+"','"+uemail+"')";
console.log('Executing-'+ins);

mysql_conn.query(ins);
console.log("inserted in to the database....");
response.send(true);

}

expenv.delete("/deleteUser",deleteNewUser)
function deleteNewUser(request,response){
var uid=request.body.userID;
var Upwd=request.body.password;
var uemail=request.body.emailID;
var del="DELETE FROM users WHERE userID='deeps'";
console.log('Executing-'+del);

mysql_conn.query(del);
console.log("deleted the database....");

}
expenv.use((req, res, next) => {

    res.header("Access-Control-Allow-Origin",

               "http://localhost:4200");

    res.header("Access-Control-Allow-Headers",

               "Origin, X-Requested-With, Content-Type, Accept");

    next();

});


expenv.listen(proc.argv[2], proc.argv[3])

console.log("Started the server at port # " + proc.argv[2]);