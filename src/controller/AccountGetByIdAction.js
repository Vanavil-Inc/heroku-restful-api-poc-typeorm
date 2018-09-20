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
/**
 * Loads account by a given id.
 */
function accountGetByIdAction(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        // get a account repository to perform operations with account
        const accountRepository = typeorm_1.getManager().getRepository(Account_1.Account);
        // load a account by a given account id
        const account = yield accountRepository.findOne(request.params.id);
        // if account was not found return 404 to the client
        if (!account) {
            response.status(404);
            response.end();
            return;
        }
        // return loaded account
        response.send(account);
    });
}
exports.accountGetByIdAction = accountGetByIdAction;
//# sourceMappingURL=AccountGetByIdAction.js.map