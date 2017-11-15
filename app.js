const express = require('express');
//const methodOverride = require('method-override')
const app = express();
const pgp = require('pg-promise')();
const mustacheExpress = require('mustache-express');
const bodyParser = require("body-parser");
const session = require('express-session');
const methodOverride = require('method-override');
var nodemailer = require("nodemailer");
var smtp =require("smtp");
var cheerio = require('cheerio');

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/html');
app.use("/", express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'))
app.use(bodyParser.json());

var db = pgp('postgres://rcoppa@localhost:5432/portfolio');


/*
app.get("/mywork", function(req, res){
  res.render("show");
});

app.get("/resume",function(req,res){
  res.render("resume");
});

app.get("/contact",function(req,res){
  res.render("contact");
});*/

app.get("/sent",function(req, res){
  res.render("sent");
});

app.get("/", function(req, res){
  res.render("index");
});


exports.contact = function(req, res){
    res.render('/contact');
};

app.post('/contact', function (req, res) {
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'naranja0106@gmail.com',
        pass: 'Marcia6184'
    }
});


  //Mail options
  mailOpts = {
      from: req.body.email, //grab form data from the request body object
      to: 'naranja0106@gmail.com',
      subject: req.body.name,
      text: req.body.name + " is reaching out to you."+"\n"+"\n"+"The email: "+"\n"+req.body.email+"\n"+"\n"+"\n"+"The Message:"+"\n"+"\n"+req.body.message
  };

transporter.sendMail(mailOpts, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log(info.messageId, info.response);
    res.redirect("/sent");
});


  mailOpts2 = {
      from: req.body.email, //grab form data from the request body object
      to: req.body.email,
      subject:"Your message to Dan",
      text: req.body.name + ","+"\n"+"\n"+" You said: "+"\n"+"\n" +req.body.message+"\n"+"\n"+"\n"+"\n"+"Thank you so much for your message! We'll be in touch soon..."+"\n"+"\n"+"Dan M."
  };

transporter.sendMail(mailOpts2, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log(info.messageId, info.response);

    res.redirect("/sent");
});

});



var port = process.env.PORT || 8000

app.listen(port, function() {
  console.log("Server Running on port "+port+" {^-^}");
});
