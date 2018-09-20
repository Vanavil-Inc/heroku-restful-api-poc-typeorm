import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Account} from "../entity/Account";

/**
 * Loads all accounts from the database.
 */
export async function accountGetAllAction(request: Request, response: Response) {

    // get a account repository to perform operations with account
    const accountRepository = getManager().getRepository(Account);

    // load a account by a given account id
    const accounts = await accountRepository.find();

    // return loaded accounts
    response.send(accounts);
}