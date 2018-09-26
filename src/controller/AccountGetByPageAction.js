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

var size, skip, pagenumber, pagetotal, size, search;

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
             //load accounts by given page number by given size
            //  const account = yield accountRepository.createQueryBuilder("accounts").select([
            //    "accounts.id",
            //    "accounts.name"
            // ]).orderBy("accounts.id", "ASC").skip(skip).take(size).getMany();
            // Load accounts by body specified parameter
            search = String(request.body.search).split(" ");
            var data = [];
            for (var i = 0; i < search.length; i++) {
              // data += "\"accounts." + search[i] + "\", ";
              // data.push("\"accounts\".\"" + search[i] + "\"");
              data.push(search[i]);
            }
            console.log(data);
            console.log(data.length);
            // data = String(data.slice(0,-2));
            // console.log(data.length);
            // console.log(data);
            const account = yield accountRepository.createQueryBuilder("accounts").select(data).orderBy("accounts.id", "ASC").skip(skip).take(size).getMany();
            // if account was not found return 404 to the client
            if (!account) {
                response.status(404);
                response.end();
                return;
            }
            // return loaded account and total page number
            response.send({account:account, pagetotal:pagetotal});
        });
  }
     } else {
             response.sendStatus(403);
    }
}
exports.accountGetByPageAction = accountGetByPageAction;
//# sourceMappingURL=AccountGetByPageAction.js.map
