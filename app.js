// console.log(__dirname);
// console.log(__filename);
// require , export


//Normal functions
// function sayhi(){
//     console.log("hey")
// }
// sayhi();


//functions expressions
//  var saybay = () => {
//      console.log("boy");
//  }
//  saybay();


// function calling inside a fucntion 
// function callfunction(fun){
//     fun();
// }
// saybay(callfunction);


// Modules and require()
// just a another js file which you require and import in your file
   
    // let a = require('./name');
    // a("NITIN");


// ``  called template strings ${data}
// let stuffs = require('./name');

// stuffs.myname("nitin");
// stuffs.adder(10,20);
// console.log(stuffs.pi);


// node event emitting
// let events = require('events');
// let myemitter = new events.EventEmitter();
// myemitter.on('something',function(e){
//     console.log("helo" + e);
// })

// myemitter.emit('something',"Nitin negi")


// showing emitting power
// let events = require('events');
// let util = require('util');

// var person = function(name){
//     this.name = name;
// }

// //person k sth eventemitter jod diya
// util.inherits(person,events.EventEmitter);  

// let nitin = new person("nitin");
// let ashu = new person("ashu");
// let shivam = new person("shivam");

// let krkuch = [nitin, ashu, shivam];

// krkuch.forEach(element => {
//     element.on('speak',function(message){
//         console.log(element.name+"said"+message);
//     })
// });

// nitin.emit('speak',"hey dude");




// //Readable Streamss data reading 
// //write streams allow node js to write data to a stream

// //readable stream allow node js to read data from stream
// //duplex can read and write stream data
// var http = require('http');
// var fs = require('fs');

// //this will read this data and pass it into to chunks in myreadstream

// // createReadStream mai eventemitter lga hota hai 
// //createWriteStream jo data chunks mai ayega unse algo file bnayega
// var myReadStream = fs.createReadStream(__dirname + '/readme.txt','utf-8');
// var myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt');


// myReadStream.on('data',function(chunk){
//     console.log('new chunks received')
//     console.log(chunk);

//     myWriteStream.write(chunk);

// })



// 16th pipes
// we can only apply this to ReadableStream beacuse we are reading data to ReadableStream and writing it

// var http = require('http');
// var fs = require('fs');

// //   /txtname 
// var myReadStream = fs.createReadStream(__dirname + '/readme.txt');
// var myWriteStream = fs.createWriteStream(__dirname + '/writeme.txt');

// myReadStream.pipe(myWriteStream);




// 17 // sending readble buffer data to the client

// let http = require('http');
// let fs = require('fs')


// let server = http.createServer(function(req,res){
//     console.log('request'+req.url);
//     res.writeHead(200,{'Content-Type': 'text/plan'});
//     var myreadstream = fs.createReadStream(__dirname+'/readme.txt');
//     myreadstream.pipe(res);
// });

// server.listen(3000,'127.0.0.2');
// console.log("all done");



//18 sending html page to the client

// let http = require('http');
// let fs = require('fs')


// let server = http.createServer(function(req,res){
//     console.log('request'+req.url);
//     res.writeHead(200,{'Content-Type': 'text/html'});
//     var myreadstream = fs.createReadStream(__dirname+'/abc.html');
//     myreadstream.pipe(res);
// });

// server.listen(3000,'127.0.0.2');
// console.log("all done");



//19 sending json to client


// let http = require('http');
// let fs = require('fs')


// let server = http.createServer(function(req,res){
//     console.log('request'+req.url);
//     res.writeHead(200,{'Content-Type': 'text/json'});
    
//     var obj = {
//         name :"nitin",
//         data : "just a json file",
//         age: 18,
//         addres: "kotdwara",
//         "collage" : "uit"
//     }

//     res.end(JSON.stringify(obj));

// });

// server.listen(3000,'127.0.0.2');
// console.log("all done");




//Basic routing
let http = require("http");
let fs = require('fs');

let server = http.createServer(function(req,res){
    // console.log(req.url)
    if(req.url === "/home" || req.url === "/"){
        res.writeHead(200,{'Content-Type' : 'Text/html' });
        let myReadStream = fs.createReadStream(__dirname + '/abc.html');
        myReadStream.pipe(res);
    }else if(req.url === "/contactr"){
        res.writeHead(200,{'Content-Type' : 'Text/html' });
        let myReadStream = fs.createReadStream(__dirname + '/contact.html');
        myReadStream.pipe(res);
    }else{
        res.writeHead(200,{'Content-Type' : 'Text/json' });
        var obj = {
            name :"nitin",
            data : "just a json file",
            age: 18,
            addres: "kotdwara",
            "collage" : "uit"
        }
        res.end(JSON.stringify(obj));
    }
})

server.listen(3000,'127.0.0.1');


//package.json manager
// list of you package which you are depend on
//npm init -> you can genrate your package.json