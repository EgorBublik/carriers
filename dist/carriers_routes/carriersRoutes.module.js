"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarriersRoutesModule = void 0;
const common_1 = require("@nestjs/common");
const carriersRoutes_controller_1 = require("./carriersRoutes.controller");
const carriersRoutes_service_1 = require("./carriersRoutes.service");
const mongoose_1 = require("@nestjs/mongoose");
const carriersRoutes_schema_1 = require("./schemas/carriersRoutes.schema");
let CarriersRoutesModule = class CarriersRoutesModule {
};
CarriersRoutesModule = __decorate([
    (0, common_1.Module)({
        providers: [carriersRoutes_service_1.CarriersRoutesService],
        controllers: [carriersRoutes_controller_1.CarriersRoutesController],
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: carriersRoutes_schema_1.CarriersRoute.name, schema: carriersRoutes_schema_1.CarriersRouteSchema }
            ])
        ]
    })
], CarriersRoutesModule);
exports.CarriersRoutesModule = CarriersRoutesModule;
//# sourceMappingURL=carriersRoutes.module.js.map