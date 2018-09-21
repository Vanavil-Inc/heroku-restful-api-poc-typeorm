"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AccountGetAllAction_1 = require("../controller/AccountGetAllAction");
const AccountGetByIdAction_1 = require("../controller/AccountGetByIdAction");
const AccountSaveAction_1 = require("../controller/AccountSaveAction");
const AccountDeleteByIdAction_1 = require("../controller/AccountDeleteById");
const AccountUpdateByIdAction_1 = require("../controller/AccountUpdateByIdAction");

const ContactSaveAction_1 = require("../controller/ContactSaveAction");
const ContactGetAllAction_1 = require("../controller/ContactGetAllAction");
const ContactGetByIdAction_1 = require("../controller/ContactGetByIdAction");
const ContactDeleteByIdAction_1 = require("../controller/ContactDeleteByIdAction");
const ContactUpdateByIdAction_1 = require("../controller/ContactUpdateByIdAction");

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
        method: "put",
        action: AccountUpdateByIdAction_1.accountUpdateByIdAction
    },
    {
        path: "/accounts/:id",
        method: "delete",
        action: AccountDeleteByIdAction_1.accountDeleteByIdAction
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
    },

    {
        path: "/contacts",
        method: "post",
        action: ContactSaveAction_1.contactSaveAction
    },
    {
        path: "/contacts",
        method: "get",
        action: ContactGetAllAction_1.contactGetAllAction
    },
    {
        path: "/contacts/:id",
        method: "get",
        action: ContactGetByIdAction_1.contactGetByIdAction
    },
    {
        path: "/contacts/:id",
        method: "delete",
        action: ContactDeleteByIdAction_1.contactDeleteByIdAction
    },
    {
        path: "/contacts/:id",
        method: "put",
        action: ContactUpdateByIdAction_1.contactUpdateByIdAction
    }
];
//# sourceMappingURL=routes.js.map