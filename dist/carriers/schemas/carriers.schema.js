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
exports.CarrierSchema = exports.Carrier = exports.RouteCarrier = exports.ContactFace = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let ContactFace = class ContactFace {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ContactFace.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ContactFace.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ContactFace.prototype, "position", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], ContactFace.prototype, "phone", void 0);
ContactFace = __decorate([
    (0, mongoose_1.Schema)()
], ContactFace);
exports.ContactFace = ContactFace;
let RouteCarrier = class RouteCarrier {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], RouteCarrier.prototype, "typeRoute", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], RouteCarrier.prototype, "countryDeparture", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], RouteCarrier.prototype, "regionDeparture", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], RouteCarrier.prototype, "cityDeparture", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], RouteCarrier.prototype, "countryRoute", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], RouteCarrier.prototype, "regionRoute", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], RouteCarrier.prototype, "cityRoute", void 0);
RouteCarrier = __decorate([
    (0, mongoose_1.Schema)()
], RouteCarrier);
exports.RouteCarrier = RouteCarrier;
let Carrier = class Carrier {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Carrier.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)([ContactFace]),
    __metadata("design:type", ContactFace)
], Carrier.prototype, "contactFace", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Carrier.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Carrier.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Carrier.prototype, "contract", void 0);
__decorate([
    (0, mongoose_1.Prop)([RouteCarrier]),
    __metadata("design:type", Array)
], Carrier.prototype, "route", void 0);
Carrier = __decorate([
    (0, mongoose_1.Schema)()
], Carrier);
exports.Carrier = Carrier;
exports.CarrierSchema = mongoose_1.SchemaFactory.createForClass(Carrier);
//# sourceMappingURL=carriers.schema.js.map