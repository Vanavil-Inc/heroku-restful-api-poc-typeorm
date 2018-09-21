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
let Contact = class Contact {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Contact.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Contact.prototype, "emailbouncedreason", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Contact.prototype, "mailingstate", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Contact.prototype, "accountid", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Contact.prototype, "assistantname", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Contact.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Contact.prototype, "mobilephone", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Contact.prototype, "birthdate", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Contact.prototype, "phone", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Contact.prototype, "mailingstreet", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Contact.prototype, "emailbounceddate", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Contact.prototype, "isdeleted", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Contact.prototype, "homephone", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Contact.prototype, "assistantphone", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Contact.prototype, "systemmodstamp", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Contact.prototype, "department", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Contact.prototype, "createddate", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Contact.prototype, "salutation", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Contact.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Contact.prototype, "createdbyid", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Contact.prototype, "firstname", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Contact.prototype, "email", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Contact.prototype, "description", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Contact.prototype, "fax", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Contact.prototype, "sfid", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Contact.prototype, "_hc_lastop", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Contact.prototype, "_hc_err", void 0);
Contact = __decorate([
    typeorm_1.Entity()
], Contact);
exports.Contact = Contact;
//# sourceMappingURL=Contact.js.map 