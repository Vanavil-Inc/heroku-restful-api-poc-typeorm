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
let Account = class Account {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Account.prototype, "id", void 0);

__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Account.prototype, "name", void 0);

__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Account.prototype, "phone", void 0);

__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Account.prototype, "shippinglongitude", void 0);

__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Account.prototype, "shippingstate", void 0);


__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Account.prototype, "shippingpostalcode", void 0);

__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Account.prototype, "billingcity", void 0);

__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Account.prototype, "billinglatitude", void 0);

__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Account.prototype, "accountsource", void 0);

__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Account.prototype, "shippingcountry", void 0);

__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Account.prototype, "shippinggeocodeaccuracy", void 0);

__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Account.prototype, "lastmodifieddate", void 0);

__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Account.prototype, "isdeleted", void 0);

__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Account.prototype, "systemmodstamp", void 0);

__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Account.prototype, "lastmodifiedbyid", void 0);

__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Account.prototype, "shippingstreet", void 0);

__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Account.prototype, "billingpostalcode", void 0);

__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Account.prototype, "billinglongitude", void 0);

__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Account.prototype, "createddate", void 0);

__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Account.prototype, "billingstate", void 0);

__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Account.prototype, "shippingcity", void 0);

__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Account.prototype, "shippinglatitude", void 0);

__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Account.prototype, "type", void 0);

__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Account.prototype, "billingcountry", void 0);

__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Account.prototype, "description", void 0);

__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Account.prototype, "billinggeocodeaccuracy", void 0);

__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Account.prototype, "fax", void 0);

__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Account.prototype, "sicdesc", void 0);

__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Account.prototype, "billingstreet", void 0);

__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Account.prototype, "sfid", void 0);

__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Account.prototype, "_hc_lastop", void 0);

__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Account.prototype, "_hc_err", void 0);

__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Account.prototype, "numberofemployees", void 0);

__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Account.prototype, "parentid", void 0);

__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Account.prototype, "masterrecordid", void 0);

__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Account.prototype, "ownerid", void 0);

__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Account.prototype, "lastactivitydate", void 0);

__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Account.prototype, "createdbyid", void 0);

__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Account.prototype, "website", void 0);

__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Account.prototype, "photourl", void 0);

__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Account.prototype, "industry", void 0);

Account = __decorate([
    typeorm_1.Entity()
], Account);
exports.Account = Account;
//# sourceMappingURL=Account.js.map