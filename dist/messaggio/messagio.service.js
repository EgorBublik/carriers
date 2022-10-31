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
exports.MessaggioService = exports.MESSAGGIO_API_KEY = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
exports.MESSAGGIO_API_KEY = "";
let MessaggioService = class MessaggioService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async sendMessage(phones) {
        try {
            const result = await this.httpService.axiosRef.post(`https://msg.messaggio.com/api/v1/send`, {
                recipients: [{ phone: '375292290809' }],
                channels: ["viber"],
                viber: {
                    from: 'Radiance',
                    label: 'promotion',
                    content: [
                        {
                            type: "text",
                            text: "Текст сообщения Viber"
                        }
                    ]
                }
            }, {
                "headers": { "Messaggio-Login": exports.MESSAGGIO_API_KEY }
            });
            console.log(result);
            return result.data;
        }
        catch (e) {
            console.log('errror:', e);
            return e;
        }
    }
};
MessaggioService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], MessaggioService);
exports.MessaggioService = MessaggioService;
//# sourceMappingURL=messagio.service.js.map