var express = require("express");
var app = express();
const jwt = require('jsonwebtoken');
var bodyParser = require("body-parser");
app.use(bodyParser.json());
var key = require("../config/secret");


async function login(req,res) {

    const user = {
        id : req.body.id,
        username : req.body.username,
        email : req.body.email,
      }
      jwt.sign({user}, key.secret, { expiresIn: '2d' }, (err, token) => {
        res.json({
          token
        });
        console.log(token);
    }
    
)};

async function verifyToken (req, res, next) {
    //Get Authorization Header Value
    const bearerHeader = req.headers['authorization'];
  
    //Check if bearer is undefined 
    if (typeof bearerHeader !== 'undefined') {
      //Split at the space 
      const bearer = bearerHeader.split(' ');
  
      //Get Access Token from the split array 
      const bearerToken = bearer[1];
  
      //Set the token
      req.token = bearerToken;
  
      //Call teh next middleware
      next();
  
    } else {
      //Forbidden Access
      res.sendStatus(403);
    }
  
  }

  module.exports = { login, verifyToken};