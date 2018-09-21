import {Request, Response} from "express";
import {getManager} from "typeorm";
import {Account} from "../entity/Account";

export async function accountDeleteByIdAction(request: Request, response: Response) {

    const accountRepository = getManager().getRepository(Account);

    const account = await accountRepository.delete(request.params.id);

    if (!account) {
        response.status(404);
        response.end();
        return;
    }
    response.send(account);
}
