import {Request, Response} from "express";
import {getManager} from "typeorm";
import {_trigger_log} from "../entity/TriggerLog";

/**
 * Loads all accounts from the database.
 */
export async function triggerAllLogs(request: Request, response: Response) {

    // get a account repository to perform operations with account
    const contactRepository = getManager().getRepository(_trigger_log);

    // load a account by a given account id
    const trigger = await contactRepository.find();

    // return loaded accounts
    response.send(trigger);
}