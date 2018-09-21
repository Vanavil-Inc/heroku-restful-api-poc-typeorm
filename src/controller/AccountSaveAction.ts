import {Request, Response} from "express";
import {getManager} from "typeorm";
import { Account } from "../entity/Account";

/**
 * Saves given account.
 */
export async function accountSaveAction(request: Request, response: Response) {

    // get a account repository to perform operations with account
    const accountRepository = getManager().getRepository(Account);

    // create a real account object from account json object sent over http
    const newAccount = accountRepository.create(request.body);

    // save received account
    await accountRepository.save(newAccount);

    // return saved account back
    response.send(newAccount);
}