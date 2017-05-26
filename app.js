const express = require('express');
//const methodOverride = require('method-override')
const app = express();
const pgp = require('pg-promise')();
const mustacheExpress = require('mustache-express');
const bodyParser = require("body-parser");
const session = require('express-session');
const methodOverride = require('method-override');
var nodemailer = require("nodemailer");
var smtp =require("smtp")

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/html');
app.use("/", express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'))
app.use(bodyParser.json());

var db = pgp('postgres://rcoppa@localhost:5432/portfolio');

app.get("/", function(req, res){
  res.render("index");
});

app.get("/mywork", function(req, res){
  res.render("show");
});

app.get("/resume",function(req,res){
  res.render("resume");
});

app.get("/contact",function(req,res){
  res.render("contact");
});

app.get("/sent",function(req, res){
  res.render("sent");
});

exports.contact = function(req, res){
    res.render('contact', { title: 'Raging Flame Laboratory - Contact', page: 'contact' })
};

app.post('/contact', function (req, res) {
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'naranja0106@gmail.com',
        pass: 'xxxxxxxxxx'
    }
});
  //Mail options
  mailOpts = {
      from: req.body.email, //grab form data from the request body object
      to: 'naranja0106@gmail.com',
      subject: req.body.name + " " + req.body.email,
      text: req.body.message
  };

transporter.sendMail(mailOpts, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log(info.messageId, info.response);

    res.redirect("/sent")
});
});

var port = process.env.PORT || 5000

app.listen(port, function() {
  console.log("Server Running {^-^}");
});
