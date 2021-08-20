var express = require('express')
var bodyParser = require('body-parser')
var app = express();


app.get('/',function(req,res){
    res.send("this is the home page")
})

app.get('/about',function(req,res){
    res.send("this is about page abc");
})

// //using route params
// app.get('/profile/:id',function(req,res){
//     res.send("this is your id bro " + req.params.id);
// })


// using template engines 
app.set('view engine' , 'ejs');

app.get('/profile/:name', function(req,res){
    var data = {age:29, job:"ninja", hobbies:["eating","programming","music listing","movie watching"]}
    res.render('profile', {person : req.params.name , data : data });
});

//template engine all steps
// you can embadded data in html file and send it user 
// install ejs package
// then create app.set('viewport',"ejs")  and view folder
//send data to res.render( person : req.params.id or name if you remember )
// then access person data in view/page.ejs file this ejs file is just a html file but can accress the varibale which we send data from res.render functions using {%= person %}
// for data output use <%= data %>
// and for wrting js code in ejs using <% console.log("data") %> like for loop and many more thing


//middlewire is a code which run btw req and res styles.css is not working
//next is just a keyword which tell go to next middle wire of url
//but by defult express comes with some middleware already install into it 
// app.use('/assets',function(req,res,next){    
//     console.log(req.url);
//     next();
// })

// expressmiddlewire
//this will take care of aur css file because css file or other file also request to the server
app.use('/assets',express.static('assets'));


// //sending html page to client
// app.get('/contact',function(req,res){
//     res.sendFile(__dirname + "/contact.html");
// })

var urlencodedParser = bodyParser.urlencoded({ extended: false })

//query String
// app.post('/contact',urlencodedParser,function(req,res){
//     // console.log(req.query);
//     // console.log(req.body);
//     res.send('welcome');
//     //now you can get data in contact.ejs
// })


app.get('/contact',function(req,res){
    res.render('contact');
})

app.post('/contact', urlencodedParser, function(req, res) {
    console.log(req.body);
    res.render('contact-welcome',{sub : req.body});
  })

//postdata formdata handling

app.listen(3000);



