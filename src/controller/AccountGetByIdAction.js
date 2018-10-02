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
require("log-timestamp");
/**
 * Loads account by a given id.
 */
function accountGetByIdAction(request, response) {
    let authorizationHeader = request.headers['authorization'] || request.headers['Authorization']
    if (typeof authorizationHeader !== 'undefined') {
        let [, token] = authorizationHeader.split(' ');
        
        if (token != User.getToken()) {
            response.sendStatus(403); //.send("Forbidden, Invalid Security Token");
            console.log("Forbidden, Invalid Security Token", token);
        } else {
            return __awaiter(this, void 0, void 0, function* () {
                // get a account repository to perform operations with account
                 const accountRepository = typeorm_1.getManager().getRepository(Account_1.Account);
                
                //variables for retry logic
                var maxNoOfRetries = 3; // maximum 3 retries
                var timeDelayBetweenRetry = 20000; //20 seconds
                var currentRetryCount = 0;
                var currentStatus = "";

                do{
                    try{
                        console.log("CurrentRetryCount=", currentRetryCount);

                        // load a account by a given account id
                        const account = yield accountRepository.findOne(request.params.id);

                        // if account was not found return 404 to the client
                        currentStatus = "success";
                        if (account) {
                            console.log("Account Lookup Success", account);
                            // return loaded account
                            response.json({
                                success: true,
                                result: account
                            });
                        } else {
                            console.log("No Records Found for the id=", request.params.id);
                            response.status(404).send("No Records Found for the id=" + request.params.id);
                        }
                    }catch(err) {
                        console.log("Error is caught inside catch ", err);
                        if (err.code == 'ECONNREFUSED') {
                            currentRetryCount = currentRetryCount + 1;
                            console.log( "changed currentRetryCount to ", currentRetryCount);
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

                response.end();
                return;
            });
        }   
    } else {
        response.sendStatus(400);
    }
}

function freeze(time) {
    const stop = new Date().getTime() + time;
    while(new Date().getTime() < stop);       
}

exports.accountGetByIdAction = accountGetByIdAction;
//# sourceMappingURL=AccountGetByIdAction.js.map
