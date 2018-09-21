import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Contact} from "../entity/Contact";

/**
 * Saves given account.
 */
export async function contactSaveAction(request: Request, response: Response) {

    // get a account repository to perform operations with account
    const contactRepository = getManager().getRepository(Contact);

    // create a real account object from account json object sent over http
    const newContact = contactRepository.create(request.body);

    // save received account
    await contactRepository.save(newContact);

    // return saved account back
    response.send(newContact);
}