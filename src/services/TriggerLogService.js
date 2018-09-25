"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const TriggerLog_1 = require("../entity/TriggerLog");
const User = require("../controller/UserController");

var minutes = 5;
var the_interval = minutes * 60 * 1000;
/**
 * Loads account by a given id.
 */
function triggerAllLogs(request, response) {
    
        return __awaiter(this, void 0, void 0, function* () {
            // get a account repository to perform operations with account
            const triggerRepository = typeorm_1.getManager().getRepository(TriggerLog_1._trigger_log);
            // load a account by a given account id
            // const trigger = yield triggerRepository.find();

            // get last 5 minutes data from the logs
            const triggerLog = yield triggerRepository.createQueryBuilder("_trigger_log").where(
                "created_at > NOW() - INTERVAL '1 minutes'"
            ).getMany();

            // response.send(triggerLog);
            console.log("*********Polling for new CDC dat Started at ", new Date().toISOString(), "************");
            console.log(triggerLog);
            console.log("*********Polling for new CDC dat Ended at ", new Date().toISOString(), "************");
        }); 
 }

exports.triggerAllLogs = triggerAllLogs;