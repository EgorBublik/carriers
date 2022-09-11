"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmoCrmModule = void 0;
const common_1 = require("@nestjs/common");
const amocrm_service_1 = require("./amocrm.service");
const amocrm_controller_1 = require("./amocrm.controller");
const axios_1 = require("@nestjs/axios");
const mongoose_1 = require("@nestjs/mongoose");
const carriers_schema_1 = require("../carriers/schemas/carriers.schema");
const carriers_module_1 = require("../carriers/carriers.module");
let AmoCrmModule = class AmoCrmModule {
};
AmoCrmModule = __decorate([
    (0, common_1.Module)({
        controllers: [amocrm_controller_1.AmoCrmController],
        providers: [amocrm_service_1.AmoCrmService],
        imports: [
            axios_1.HttpModule, carriers_module_1.CarriersModule, mongoose_1.MongooseModule.forFeature([
                { name: carriers_schema_1.Carrier.name, schema: carriers_schema_1.CarrierSchema }
            ])
        ]
    })
], AmoCrmModule);
exports.AmoCrmModule = AmoCrmModule;
//# sourceMappingURL=amocrm.module.js.map