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
const v = require('node-input-validator');


/**
 * Saves given account.
 */
function accountSaveAction(request, response) {
    let authorizationHeader = request.headers['authorization'] || request.headers['Authorization']
    if (typeof authorizationHeader !== 'undefined') {
    let [, token] = authorizationHeader.split(' ');
    
    if (token != User.getToken()) {
        response.sendStatus(403) // Forbidden, you're not logged in
        console.log("User not logged in");
    } else {   
        let validator = new v(request.body,{name:'required|string', phone:'required'});
            validator.check().then(function (matched) {
                if(matched) {
                    return __awaiter(this, void 0, void 0, function* () {
                        const accountRepository = typeorm_1.getManager().getRepository(Account_1.Account);
                        const newAccount = accountRepository.create(request.body);
                        yield accountRepository.save(newAccount);
                        response.send(newAccount);
                    });
                }  
                else{
                   console.log("Invalid input");
                    return "Try again";
                }
            });
        }
  } else {
        response.sendStatus(403);
    }
}
exports.accountSaveAction = accountSaveAction;
//# sourceMappingURL=AccountSaveAction.js.map