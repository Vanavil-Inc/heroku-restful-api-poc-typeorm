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
          fieldlist:'required|string'
        });

        let validatorf = new validatorColumn(request.body.filter, {
          filter:'object',
          'filter.condition':'array',
          'filter.wherefilter':'array'
        });

        let validatora1 = new validatorColumn(request.body.filter.condition, {
          'condition.*':'required|string'
        });

        let validatora2 = new validatorColumn(request.body.filter.wherefilter, {
          'wherefilter.*':'required|string'
        });


        // validator check
        validator.check().then(function (matched) {
          if(!matched) {
            response.json({
              message:"Please Check To Make Sure Inputs Are Of Proper Type"
            })
            response.end();
          }
        })
        validatorf.check().then(function (matched) {
          if(!matched) {
            response.json({
              message:"Please Check To Make Sure Inputs Are Of Proper Type"
            })
            response.end();
          }
        })
        validatora1.check().then(function (matched) {
          if(!matched) {
            response.json({
              message:"Please Check To Make Sure Inputs Are Of Proper Type"
            })
            response.end();
          }
        })
        validatora2.check().then(function (matched) {
          if(!matched) {
            response.json({
              message:"Please Check To Make Sure Inputs Are Of Proper Type"
            })
            response.end();
          }
        })
        // get a account repository to perform operations with account
        const accountRepository = typeorm_1.getManager().getRepository(Account_1.Account);
        // getting account list for help in pagination
        const acclist = yield accountRepository.find();
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
          response.send("Requested Page is Unavailable");
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
        console.log(filter);
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
      });
    }
  } else {
    response.sendStatus(403);
  }
}
exports.accountGetByPageAction = accountGetByPageAction;
//# sourceMappingURL=AccountGetByPageAction.js.map
