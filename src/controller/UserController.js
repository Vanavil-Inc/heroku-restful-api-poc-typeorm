var express = require("express");
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const jwt = require('jsonwebtoken');
var key = require("../config/secret");
var mToken;

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
      setToken(token);
      }
)};

function setToken(token){
    mToken = token;
}
function getToken(){
  return mToken;
}

module.exports = { login,getToken};