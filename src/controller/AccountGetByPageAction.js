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
const typeorm_1 = require("typeorm");
const Account_1 = require("../entity/Account");
const User = require("../controller/UserController");
const validatorColumn = require('node-input-validator');

var size, skip, pagenumber, pagetotal, fieldlist, filter;

/**
* Loads account by a given id.
*/
function accountGetByPageAction(request, response) {
  let authorizationHeader = request.headers['authorization'] || request.headers['Authorization']
  if (typeof authorizationHeader !== 'undefined') {
    let [, token] = authorizationHeader.split(' ');

    if (token != User.getToken()) {
      response.sendStatus(403) // Forbidden, you're not logged in
      console.log("User not logged in");
    } else {
      return __awaiter(this, void 0, void 0, function* () {
        // validator for all fields
        let validator = new validatorColumn(request.body,{
          size:'required|integer',
          page:'required|integer',
          fieldlist:'required|string',
          filter:'object'
        });

        let validatorf = new validatorColumn(request.body.filter, {
          condition:'array',
          wherefilter:'array',
          'condition.*':'string',
          'wherefilter.*':'string'
        });

        // console.log("Validations equals: " + request.body.page + "\n" + request.body.size + "\n" + request.body.fieldlist + "\n" + request.body.filter);

        // validator check
        validator.check().then(function (matched) {
          if(!matched) {
            response.json({
              message:"Please Check To Make Sure Page, Size, SELECT, And/Or Filter Object Are Correct"
            })
            response.end();
          }
        })
        validatorf.check().then(function (matched) {
          if(!matched) {
            response.json({
              message:"Please Check To Make Sure Filter Object Array Is Correct"
            })
            response.end();
          }
        })

        // get a account repository to perform operations with account
        const accountRepository = typeorm_1.getManager().getRepository(Account_1.Account);

        // let repCon = accountRepository.manager.connection.isConnected;
        // console.log("========================================================");
        // console.log(repCon);
        // console.log("========================================================");
        // if (repCon !== true) {
        //   for (let j = 0; j < 4; j++) {
        //     setTimeout(async function() {
        //       console.log("========================================================");
        //       console.log("Attempt #" + j + " to Reconnect...");
        //       await accountRepository.manager.connection.connect().catch(error => console.log("Error: ", error));
        //       console.log("========================================================");
        //     }, 3000);
        //     if (repCon === true) {
        //       break;
        //     } else if ((j === 3) && (repCon === false)) {
        //       response.json({
        //         message: "Cannot Connect to the Database"
        //       })
        //       response.end();
        //     }
        //   }
        // }

        // getting account list for help in pagination
        // const acclist = yield accountRepository.find();


        //variables for retry logic
        var maxNoOfRetries = 3; // maximum 3 retries
        var timeDelayBetweenRetry = 20000; //20 seconds
        var currentRetryCount = 0;
        var currentStatus = "";

        do {
          try {
            console.log("CurrentRetryCount= ", currentRetryCount);
            // getting account list for help in pagination
            const acclist = yield accountRepository.find();
            // if account was not found return 404 to the client
            currentStatus = "success";
            if (acclist) {
              console.log("Account Lookup Success");
              // return loaded accounts
              const qb = accountRepository.createQueryBuilder("accounts");
              var acctotal = Object.keys(acclist).length;
              // pulling page size information
              size = parseInt(request.body.size);
              // determines by how many items to skip based on page selection
              pagenumber = parseInt(request.body.page);
              pagetotal = Math.ceil(acctotal/size);
              // logic for page number range
              if ((pagenumber <= pagetotal) && (pagenumber >= 1)) {
                skip = (pagenumber - 1) * size;
              } else {
                response.json({
                  message: "Requested Page is Unavailable"
                })
                response.end();
                return;
              }
              // fieldset criteria
              fieldlist = String(request.body.fieldlist).split(" ");
              var datafl = [];
              for (var i = 0; i < fieldlist.length; i++) {
                datafl.push(fieldlist[i]);
              }
              // Forming the QueryBuilder
              qb.select(datafl)
              // Adding the filter criteria
              filter = request.body.filter;
              if (filter) {
                if (filter.condition.length >= 2) {
                  qb.where(filter.wherefilter[0]);
                  for (var i = 1; i < filter.wherefilter.length; i++) {
                    if (filter.condition[i] === "AND") {
                      qb.andWhere(filter.wherefilter[i]);
                    } else{
                      qb.orWhere(filter.wherefilter[i]);
                    }
                  }
                }
              }
              // Second logic for page number range
              var acctotal1 = yield qb.getCount();
              var qptotal = Math.ceil(acctotal1/size);
              if ((pagenumber <= qptotal) && (pagenumber >= 1)) {
                skip = (pagenumber - 1) * size;
              } else {
                response.send("Requested Page is Unavailable");
                response.end();
                return;
              }
              // Finally putting it all together
              qb.orderBy("accounts.id", "ASC").skip(skip).take(size);
              // Load accounts by body specified parameter
              const account = yield qb.getMany();
              // if account was not found return 404 to the client
              if (!account) {
                response.status(404);
                response.end();
                return;
              }
              // return loaded account and total page number
              response.send({"Accounts":account, "Selected Accounts Total":acctotal1, "Selected Pages Total":qptotal, "Accounts Total":acctotal, "Pages Available Total":pagetotal});

            } else {
              console.log("No Records Found");
              response.status(404).send("No Records Found");
            }
          } catch(err) {
            console.log("Error is caught inside catch: ", err);
            if (err.code == 'ECONNREFUSED') {
              currentRetryCount += 1;
              console.log( "changed currentRetryCount to: ", currentRetryCount);
              if (currentRetryCount > maxNoOfRetries) {
                currentStatus = "failed";
                response.status(500).send(err);
              } else {
                console.log("Before the timer");
                freeze(timeDelayBetweenRetry);
                console.log("After the timer");
              }
            } else {
              currentStatus = "failed";
              response.status(500).send(err);
            }
          }
        } while(currentRetryCount <= maxNoOfRetries && currentStatus == "");
      });
    }
  } else {
    response.sendStatus(403);
  }
}

function freeze(time) {
  const stop = new Date().getTime() + time;
  while(new Date().getTime() < stop);
}

exports.accountGetByPageAction = accountGetByPageAction;
//# sourceMappingURL=AccountGetByPageAction.js.map
