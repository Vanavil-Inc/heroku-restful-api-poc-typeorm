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
const v = require('node-input-validator');
/**
 * Saves given account.
 */
function contactSaveAction(request, response) {
    let authorizationHeader = request.headers['authorization'] || request.headers['Authorization']
    if (typeof authorizationHeader !== 'undefined') {
    let [, token] = authorizationHeader.split(' ');
    
    if (token != User.getToken()) {
        response.sendStatus(403) // Forbidden, you're not logged in
        console.log("User not logged in");
    } else {
        let validator = new v(request.body,{name:'required|string', birthdate:'required', email:'required|email'});
        validator.check().then(function (matched) {
            if(matched) {
                return __awaiter(this, void 0, void 0, function* () {
                    // get a account repository to perform operations with account
                    const contactRepository = typeorm_1.getManager().getRepository(Contact_1.Contact);
                    // create a real account object from account json object sent over http
                    const newContact = contactRepository.create(request.body);
                    // save received accountv
                    yield contactRepository.save(newContact);
                    // return saved account back
                    response.send(newContact);
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
exports.contactSaveAction = contactSaveAction;
//# sourceMappingURL=ContactSaveAction.js.map 