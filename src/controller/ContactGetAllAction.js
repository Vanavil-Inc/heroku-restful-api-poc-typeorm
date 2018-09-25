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
const Contact_1 = require("../entity/Contact");
const User = require("../controller/UserController");
/**
 * Loads all accounts from the database.
 */
function contactGetAllAction(request, response)  {
    let authorizationHeader = request.headers['authorization'] || request.headers['Authorization']
    if (typeof authorizationHeader !== 'undefined') {
        let [, token] = authorizationHeader.split(' ');
        
        // console.log("-----------passedtoken------------"+User.getToken());
        
        if (token != User.getToken()) {
            response.sendStatus(400) // Forbidden, you're not logged in
            console.log("User not logged in");
        } else {
            // validate the token    
            return __awaiter(this, void 0, void 0, function* () {
                // get a account repository to perform operations with account
                const contactRepository = typeorm_1.getManager().getRepository(Contact_1.Contact);
                // load a account by a given account id
                const contacts = yield contactRepository.find();
                // return loaded accounts
                response.json({
                    success: true,
                    result: contacts
                });
                // return next()
            });
        }
    } else {
        response.sendStatus(400);
    }
}

exports.contactGetAllAction = contactGetAllAction;
//# sourceMappingURL=ContactGetAllAction.js.map