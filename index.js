//import required modules
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
var bodyParser = require('body-parser');

dotenv.config();
const axios = require("axios");
const qs = require("querystring");
//set up express object
const app = express();
const port = process.env.PORT || "8888";
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const bored= 'https://www.boredapi.com/api/activity';


//set up path
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname,"public")));

var request = require('request');

app.get("/", (req, res) => {

 res.render("index", {title: "Home"});
});

//set up server listening
app.listen(port, () =>{
console.log(`listening on http://localhost:${port}`);
});

//Twilio API
app.post('/', urlencodedParser, function(req,res){

  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = require('twilio')(accountSid, authToken);
  console.log(req.body);

  client.messages
    .create({
      body: req.body.messageContent,
      from: '+13186619730',
      to: req.body.recieverNumber
    })
  .then(message => res.send('The message was sent.'));
  
});//End Twilio API