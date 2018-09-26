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
var faccount;

var size, skip, pagenumber, pagetotal, fieldlist, filter, tot;

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
            filter:'required|string'
          });
          validator.check().then(function (matched) {
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
            // load accounts by given page number by given size
            //  const account = yield accountRepository.createQueryBuilder("accounts").select([
            //    "accounts.id",
            //    "accounts.name"
            // ]).orderBy("accounts.id", "ASC").skip(skip).take(size).getMany();
            // fieldset criteria
            fieldlist = String(request.body.fieldlist).split(" ");
            var datafl = [];
            for (var i = 0; i < fieldlist.length; i++) {
              datafl.push(fieldlist[i]);
            }
            // filter criteria
            filter = String(request.body.filter).split(", ");
            var datafr = [];
            if ((filter.length >= 1) && filter.length <= 5) {
              for (var i = 0; i < filter.length; i++) {
                datafr.push(filter[i]);
              }
              switch(filter.length) {
                case 1:
                  faccount = yield accountRepository.createQueryBuilder("accounts").select(datafl).where(datafr[0]).orderBy("accounts.id", "ASC").skip(skip).take(size).getMany();
                  tot = yield accountRepository.createQueryBuilder("accounts").select(datafl).where(datafr[0]).orderBy("accounts.id", "ASC").skip(skip).getMany();
                break;

                case 2:
                  faccount = yield accountRepository.createQueryBuilder("accounts").select(datafl).where(datafr[0]).andWhere(datafr[1]).orderBy("accounts.id", "ASC").skip(skip).take(size).getMany();
                  tot = yield accountRepository.createQueryBuilder("accounts").select(datafl).where(datafr[0]).andWhere(datafr[1]).orderBy("accounts.id", "ASC").skip(skip).getMany();
                break;

                case 3:
                  faccount = yield accountRepository.createQueryBuilder("accounts").select(datafl).where(datafr[0]).andWhere(datafr[1]).andWhere(datafr[2]).orderBy("accounts.id", "ASC").skip(skip).take(size).getMany();
                  tot = yield accountRepository.createQueryBuilder("accounts").select(datafl).where(datafr[0]).andWhere(datafr[1]).andWhere(datafr[2]).orderBy("accounts.id", "ASC").skip(skip).getMany();
                break;

                case 4:
                  faccount = yield accountRepository.createQueryBuilder("accounts").select(datafl).where(datafr[0]).andWhere(datafr[1]).andWhere(datafr[2]).andWhere(datafr[3]).orderBy("accounts.id", "ASC").skip(skip).take(size).getMany();
                  tot = yield accountRepository.createQueryBuilder("accounts").select(datafl).where(datafr[0]).andWhere(datafr[1]).andWhere(datafr[2]).andWhere(datafr[3]).orderBy("accounts.id", "ASC").skip(skip).getMany();
                break;

                case 5:
                  faccount = yield accountRepository.createQueryBuilder("accounts").select(datafl).where(datafr[0]).andWhere(datafr[1]).andWhere(datafr[2]).andWhere(datafr[3]).andWhere(datafr[4]).orderBy("accounts.id", "ASC").skip(skip).take(size).getMany();
                  tot = yield accountRepository.createQueryBuilder("accounts").select(datafl).where(datafr[0]).andWhere(datafr[1]).andWhere(datafr[2]).andWhere(datafr[3]).andWhere(datafr[4]).orderBy("accounts.id", "ASC").skip(skip).getMany();
                break;

                default:
                  faccount = yield accountRepository.createQueryBuilder("accounts").select(datafl).orderBy("accounts.id", "ASC").skip(skip).take(size).getMany();
                  tot = yield accountRepository.createQueryBuilder("accounts").select(datafl).orderBy("accounts.id", "ASC").skip(skip).getMany();
                break;
              }
            } else {
                faccount = yield accountRepository.createQueryBuilder("accounts").select(datafl).orderBy("accounts.id", "ASC").skip(skip).take(size).getMany();
                tot = yield accountRepository.createQueryBuilder("accounts").select(datafl).orderBy("accounts.id", "ASC").skip(skip).getMany();
            }

            // Load accounts by body specified parameter
            const account = faccount;
            var acctotal1 = Object.keys(tot).length;
            var qptotal = Math.ceil(acctotal1/size);
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
