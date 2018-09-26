import { accountGetAllAction } from "../controller/AccountGetAllAction";
import { accountGetByIdAction } from "../controller/AccountGetByIdAction";
import { accountGetByPageAction } from "../controller/AccountGetByPageAction";
import { accountSaveAction } from "../controller/AccountSaveAction";
import { accountDeleteByIdAction } from "../controller/AccountDeleteById";
import { accountUpdateByIdAction } from "../controller/AccountUpdateByIdAction";

import {contactSaveAction} from "../controller/ContactSaveAction"
import { contactGetAllAction } from "../controller/ContactGetAllAction";
import { contactGetByIdAction } from "../controller/ContactGetByIdAction";
import {contactDeleteByIdAction}  from "../controller/ContactDeleteByIdAction";
import {contactUpdateByIdAction} from "../controller/ContactUpdateByIdAction";



/**
 * All application routes.
 */
export const AppRoutes = [
    {
        path: "/accounts",
        method: "get",
        action: accountGetAllAction
    },
    {
        path: "/accounts/:id",
        method: "get",
        action: accountGetByIdAction
    },
    {
        path: "/accounts/page",
        method: "post",
        action: accountGetByPageAction
    },
    {
        path: "/accounts",
        method: "post",
        action: accountSaveAction
    },
    {
        path: "/accounts/:id",
        method: "delete",
        action: accountDeleteByIdAction
    },
    {
        path: "/accounts/:id",
        method: "put",
        action: accountUpdateByIdAction
    },
    {
        path: "/contacts",
        method: "post",
        action: contactSaveAction
    },
    {
        path: "/contacts",
        method: "get",
        action: contactGetAllAction
    },
    {
        path: "/contacts/:id",
        method: "get",
        action: contactGetByIdAction
    },
    {
        path: "/contacts/:id",
        method: "delete",
        action: contactDeleteByIdAction
    },
    {
        path: "/contacts/:id",
        method: "put",
        action: contactUpdateByIdAction
    }
];
