"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let _trigger_log = class _trigger_log {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], _trigger_log.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], _trigger_log.prototype, "txid", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], _trigger_log.prototype, "created_at", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], _trigger_log.prototype, "updated_at", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], _trigger_log.prototype, "processed_at", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], _trigger_log.prototype, "processed_tx", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], _trigger_log.prototype, "state", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], _trigger_log.prototype, "action", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], _trigger_log.prototype, "table_name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], _trigger_log.prototype, "record_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], _trigger_log.prototype, "sfid", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], _trigger_log.prototype, "old", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], _trigger_log.prototype, "values", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], _trigger_log.prototype, "sf_result", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], _trigger_log.prototype, "sf_message", void 0);

_trigger_log = __decorate([
    typeorm_1.Entity()
], _trigger_log);

exports._trigger_log = _trigger_log;
//# sourceMappingURL=Contact.js.map 