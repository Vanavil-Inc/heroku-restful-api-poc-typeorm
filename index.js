"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const routes_1 = require("./src/config/routes");

var expressValidator = require("express-validator");
var expressSession = require("express-session");


//port number to run the app
const port = process.env.PORT || 5000

// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
typeorm_1.createConnection().then((connection) => __awaiter(this, void 0, void 0, function* () {
    // create express app
    const app = express();
    app.use(bodyParser.json());
    app.use(expressValidator());
    // app.use(expressSession());

    // register all application routes
    routes_1.AppRoutes.forEach(route => {
        app[route.method](route.path, (request, response, next) => {
            route.action(request, response)
                .then(() => next)
                .catch(err => next(err));
        });
    });

    app.get("/", function(req, res) {
        res.send("TypeORM with Herokuuu");
      });


    app.post('/login', (req, res) => {
        //Mock User
        const user = {
          id : req.body.id,
          username : req.body.username,
          email : req.body.email,
        }
        jwt.sign({user}, 'secretKey', { expiresIn: '2d' }, (err, token) => {
          res.json({
            token
          });
        });
      });

      function verifyToken (req, res, next) {
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

    //  var auth = "Basic " + new Buffer(username + ":" + password).toString("base64");


    // run app
    app.listen(port);
    console.log("Express application is up and running on port ", port);
})).catch(error => console.log("TypeORM connection error: ", error));
//# sourceMappingURL=index.js.map