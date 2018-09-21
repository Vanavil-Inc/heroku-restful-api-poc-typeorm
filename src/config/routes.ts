import { accountGetAllAction } from "../controller/AccountGetAllAction";
import { accountGetByIdAction } from "../controller/AccountGetByIdAction";
import { accountSaveAction } from "../controller/AccountSaveAction";

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
        path: "/accounts",
        method: "post",
        action: accountSaveAction
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