import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Account} from "../entity/Account";

/**
 * Loads account by a given id.
 */
export async function accountUpdateByIdAction(request: Request, response: Response) {

    // get a account repository to perform operations with account
    const accountRepository = getManager().getRepository(Account);

    // load a account by a given account id
    const account = await accountRepository.insert(request.params.id);

    // if account was not found return 404 to the client
    if (!account) {
        response.status(404);
        response.end();
        return;
    }

    // return loaded account
    response.send(account);
}
