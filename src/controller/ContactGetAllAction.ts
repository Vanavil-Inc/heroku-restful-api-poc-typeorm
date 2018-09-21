import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Contact} from "../entity/Contact";

/**
 * Loads all accounts from the database.
 */
export async function contactGetAllAction(request: Request, response: Response) {

    // get a account repository to perform operations with account
    const contactRepository = getManager().getRepository(Contact);

    // load a account by a given account id
    const contacts = await contactRepository.find();

    // return loaded accounts
    response.send(contacts);
}