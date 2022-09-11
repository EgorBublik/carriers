"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarriersModule = void 0;
const common_1 = require("@nestjs/common");
const carriers_controller_1 = require("./carriers.controller");
const carriers_service_1 = require("./carriers.service");
const mongoose_1 = require("@nestjs/mongoose");
const carriers_schema_1 = require("./schemas/carriers.schema");
let CarriersModule = class CarriersModule {
};
CarriersModule = __decorate([
    (0, common_1.Module)({
        providers: [carriers_service_1.CarriersService],
        controllers: [carriers_controller_1.CarriersController],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: carriers_schema_1.Carrier.name, schema: carriers_schema_1.CarrierSchema }
            ])
        ],
        exports: [carriers_service_1.CarriersService]
    })
], CarriersModule);
exports.CarriersModule = CarriersModule;
//# sourceMappingURL=carriers.module.js.map