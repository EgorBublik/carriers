"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const carriers_module_1 = require("./carriers/carriers.module");
const mongoose_1 = require("@nestjs/mongoose");
const routes_module_1 = require("./routes/routes.module");
const requests_module_1 = require("./request/requests.module");
const amocrm_module_1 = require("./amo-crm/amocrm.module");
const messagio_module_1 = require("./messaggio/messagio.module");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [carriers_module_1.CarriersModule, amocrm_module_1.AmoCrmModule, routes_module_1.RoutesModule, messagio_module_1.MessaggioModule, requests_module_1.RequestsModule, auth_module_1.AuthModule, users_module_1.UsersModule, mongoose_1.MongooseModule.forRoot('mongodb+srv://EgorBublik1:1q2w3e@cluster0.yqm8y.mongodb.net/Carriers?retryWrites=true&w=majority')],
        controllers: [],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map