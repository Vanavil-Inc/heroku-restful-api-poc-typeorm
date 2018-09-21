"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AccountGetAllAction_1 = require("../controller/AccountGetAllAction");
const AccountGetByIdAction_1 = require("../controller/AccountGetByIdAction");
const AccountSaveAction_1 = require("../controller/AccountSaveAction");
const AccountDeleteByIdAction_1 = require("../controller/AccountDeleteById");
const AccountUpdateByIdAction_1 = require("../controller/AccountUpdateByIdAction");
/**
 * All application routes.
 */
exports.AppRoutes = [
    {
        path: "/accounts",
        method: "get",
        action: AccountGetAllAction_1.accountGetAllAction
    },
    {
        path: "/accounts/:id",
        method: "get",
        action: AccountGetByIdAction_1.accountGetByIdAction
    },
    {
        path: "/accounts",
        method: "post",
        action: AccountSaveAction_1.accountSaveAction
    },
    {
        path: "/accounts/:id",
        method: "delete",
        action: AccountDeleteByIdAction_1.accountDeleteByIdAction
    },
    {
        path: "/accounts/:id",
        method: "put",
        action: AccountUpdateByIdAction_1.accountUpdateByIdAction
    }
];
//# sourceMappingURL=routes.js.map