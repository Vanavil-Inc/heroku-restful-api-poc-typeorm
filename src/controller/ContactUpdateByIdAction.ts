import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Contact} from "../entity/Contact";

/**
 * Loads account by a given id.
 */
export async function contactUpdateByIdAction(request: Request, response: Response) {

    // get a account repository to perform operations with account
    const contactRepository = getManager().getRepository(Contact);

    // load a account by a given account id
    const contact = await contactRepository.insert(request.params.id);

    // if account was not found return 404 to the client
    if (!contact) {
        response.status(404);
        response.end();
        return;
    }

    // return loaded account
    response.send(contact);
}
