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
/**
 * Saves given account.
 */
function contactSaveAction(request, response) {
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
exports.contactSaveAction = contactSaveAction;
//# sourceMappingURL=ContactSaveAction.js.map 