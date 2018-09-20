import {accountGetAllAction} from "./controller/AccountGetAllAction";
import {accountGetByIdAction} from "./controller/AccountGetByIdAction";
import {accountSaveAction} from "./controller/AccountSaveAction";

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
    }
];