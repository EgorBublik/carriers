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
exports.AmoCrmService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const amocrm_controller_1 = require("./amocrm.controller");
const fs = require("fs");
const carriers_service_1 = require("../carriers/carriers.service");
const getCustomField = (name, data, isArray = false) => {
    var _a, _b, _c;
    const values = (_c = (_b = (_a = data === null || data === void 0 ? void 0 : data.custom_fields_values) === null || _a === void 0 ? void 0 : _a.find((item) => item.field_name === name)) === null || _b === void 0 ? void 0 : _b.values) === null || _c === void 0 ? void 0 : _c.map(item => item.value);
    return !isArray ? values === null || values === void 0 ? void 0 : values[0] : values;
};
let AmoCrmService = class AmoCrmService {
    constructor(httpService, carriersService) {
        this.httpService = httpService;
        this.carriersService = carriersService;
    }
    async getToken(code) {
        try {
            const result = await this.httpService.axiosRef.post(`https://${amocrm_controller_1.AMO_CLIENT.domain}/oauth2/access_token`, {
                "client_id": amocrm_controller_1.AMO_CLIENT.client_id,
                "client_secret": amocrm_controller_1.AMO_CLIENT.client_secret,
                "grant_type": "authorization_code",
                "code": code,
                "redirect_uri": amocrm_controller_1.AMO_CLIENT.redirect_uri
            }, {
                "headers": { "content-type": "application/json" }
            });
            fs.writeFileSync('./src/amo-crm/token.txt', JSON.stringify(result.data));
            return result.data;
        }
        catch (e) {
            console.log('errror:', e);
            return e;
        }
    }
    async getRefreshToken() {
        const refreshToken = fs.readFileSync('./src/amo-crm/token.txt', 'utf8');
        try {
            const accessTokenResult = await this.httpService.axiosRef.post(`https://${amocrm_controller_1.AMO_CLIENT.domain}/oauth2/access_token`, {
                "client_id": amocrm_controller_1.AMO_CLIENT.client_id,
                "client_secret": amocrm_controller_1.AMO_CLIENT.client_secret,
                "grant_type": "refresh_token",
                "refresh_token": JSON.parse(refreshToken).refresh_token,
                "redirect_uri": amocrm_controller_1.AMO_CLIENT.redirect_uri
            }, {
                "headers": { "content-type": "application/json" }
            });
            fs.writeFileSync('./src/amo-crm/token.txt', JSON.stringify(accessTokenResult.data));
        }
        catch (e) {
            console.log(e);
            return e;
        }
    }
    async getPostInfo(page, type) {
        try {
            const accessToken = fs.readFileSync('./src/amo-crm/token.txt', 'utf8');
            const getInfo = await this.httpService.axiosRef.get(`https://radiancedir.amocrm.ru/api/v4/${type}?page=${page}`, {
                "headers": {
                    "content-type": "application/json",
                    "Authorization": `Bearer ${JSON.parse(accessToken).access_token}`
                }
            });
            return getInfo.data;
        }
        catch (e) {
            console.log(e);
            return "Error";
        }
    }
    async allPages(type, page = 1, prev = []) {
        var _a;
        const result = await this.getPostInfo(page, type);
        if (result === null || result === void 0 ? void 0 : result._links) {
            prev.push((_a = result === null || result === void 0 ? void 0 : result._embedded) === null || _a === void 0 ? void 0 : _a[type]);
            return await this.allPages(type, page + 1, prev);
        }
        else {
            return prev.flat();
        }
    }
    async transformContact(contact) {
        const phone = getCustomField('PHONE', contact, true);
        const email = getCustomField('EMAIL', contact, true);
        const position = getCustomField('POSITION', contact, true);
        const amoIdCarriers = await contact._embedded.companies.map((item) => item.id);
        const carriersIds = await this.carriersService.getByAmoIds(amoIdCarriers);
        return {
            carriersIds,
            firstname: contact.first_name,
            lastname: contact.last_name,
            email: email,
            position: position,
            phone: phone
        };
    }
    transformCarrier(carrier) {
        return {
            amoId: carrier.id,
            name: carrier.name,
        };
    }
    async sync() {
        const resultCompanies = await this.allPages('companies');
        const resultContacts = await this.allPages('contacts');
        const transformCompanies = resultCompanies.map(this.transformCarrier);
        transformCompanies.forEach(item => {
            this.carriersService.create(item);
        });
        const transformContacts = resultContacts.map(this.transformContact);
        transformContacts.forEach;
    }
};
AmoCrmService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService, carriers_service_1.CarriersService])
], AmoCrmService);
exports.AmoCrmService = AmoCrmService;
//# sourceMappingURL=amocrm.service.js.map