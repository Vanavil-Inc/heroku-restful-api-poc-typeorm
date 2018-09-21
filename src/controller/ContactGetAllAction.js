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
 * Loads all accounts from the database.
 */
function contactGetAllAction(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        // get a account repository to perform operations with account
        const contactRepository = typeorm_1.getManager().getRepository(Contact_1.Contact);
        // load a account by a given account id
        const contacts = yield contactRepository.find();
        // return loaded accounts
        response.send(contacts);
    });
}
exports.contactGetAllAction = contactGetAllAction;
//# sourceMappingURL=ContactGetAllAction.js.map