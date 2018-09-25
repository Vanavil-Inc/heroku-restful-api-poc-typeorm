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


/**
 * Saves given account.
 */
function accountSaveAction(request, response, next) {
    let authorizationHeader = request.headers['authorization'] || request.headers['Authorization'];
    let [, token] = authorizationHeader.split(' ');
    if (typeof authorizationHeader !== 'undefined') {
       
        if(token != User.getToken()){
            response.sendStatus(400);
            console.log("User not logged in");
        }else{
            return __awaiter(this, void 0, void 0, function* () {
                let validator = new validatorColumn(request.body,{name:'required|string'});
                validator.check().then(function (matched){
                    if(matched) {
                        const accountRepository = typeorm_1.getManager().getRepository(Account_1.Account);
                        const newAccount = accountRepository.create(request.body);
                        accountRepository.save(newAccount).then(accountOutput => {
                            response.json({
                                success: true,
                                message:"Successfully Inserted",
                                result: accountOutput
                            })
                        });
                    } else{
                        response.json({
                            success: false,
                            message:"Please Enter the Name"
                        })
                    }
                });
            });
        }
    }else{
        response.sendStatus(400);
    }
}
exports.accountSaveAction = accountSaveAction;
//# sourceMappingURL=AccountSaveAction.js.map