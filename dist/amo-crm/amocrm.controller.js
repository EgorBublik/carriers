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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmoCrmController = exports.AMO_CLIENT = void 0;
const common_1 = require("@nestjs/common");
const amocrm_service_1 = require("./amocrm.service");
const common_2 = require("@nestjs/common");
exports.AMO_CLIENT = {
    domain: "radiancedir.amocrm.ru",
    client_id: "c96b6288-a5b7-4dee-972f-b75aa5fbda24",
    client_secret: "zJB0deBijY53aTknq467TC326GpMiZjMyUekGAzPS2NZIXioiDKGnqRyoNoa72Dv",
    redirect_uri: "https://radiance.tools-api.com/api/get_token.php"
};
let AmoCrmController = class AmoCrmController {
    constructor(amoCrmService) {
        this.amoCrmService = amoCrmService;
    }
    async setCode({ code }) {
        return this.amoCrmService.getToken(code);
    }
    async setRefreshToken() {
        await this.amoCrmService.getRefreshToken();
        await this.amoCrmService.sync();
        const resultCompanies = await this.amoCrmService.allPages('companies');
        const resultContacts = await this.amoCrmService.allPages('contacts');
        return {
            contacts: resultContacts.map(this.amoCrmService.transformContact),
            companies: resultCompanies.map(this.amoCrmService.transformCarrier),
        };
    }
};
__decorate([
    (0, common_1.Post)('get-token'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AmoCrmController.prototype, "setCode", null);
__decorate([
    (0, common_1.Get)('getAmoAccountInfo'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AmoCrmController.prototype, "setRefreshToken", null);
AmoCrmController = __decorate([
    (0, common_1.Controller)('amo-crm'),
    __param(0, (0, common_2.Inject)((0, common_2.forwardRef)(() => amocrm_service_1.AmoCrmService))),
    __metadata("design:paramtypes", [amocrm_service_1.AmoCrmService])
], AmoCrmController);
exports.AmoCrmController = AmoCrmController;
//# sourceMappingURL=amocrm.controller.js.map