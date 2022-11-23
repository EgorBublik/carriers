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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarriersController = void 0;
const common_1 = require("@nestjs/common");
const carriers_service_1 = require("./carriers.service");
const create_carrier_dto_1 = require("./dto/create-carrier.dto");
const update_carrier_dto_1 = require("./dto/update-carrier.dto");
let CarriersController = class CarriersController {
    constructor(carriersService) {
        this.carriersService = carriersService;
    }
    getAll() {
        return this.carriersService.getAll();
    }
    getOne(id) {
        return this.carriersService.getById(id);
    }
    create(createCarrierDto) {
        return this.carriersService.create(createCarrierDto);
    }
    remove(id) {
        return this.carriersService.remove(id);
    }
    update(updateCarrierDto, id) {
        return this.carriersService.update(id, updateCarrierDto);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CarriersController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CarriersController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof create_carrier_dto_1.CreateCarrierDto !== "undefined" && create_carrier_dto_1.CreateCarrierDto) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], CarriersController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CarriersController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof update_carrier_dto_1.UpdateCarrierDto !== "undefined" && update_carrier_dto_1.UpdateCarrierDto) === "function" ? _b : Object, String]),
    __metadata("design:returntype", Promise)
], CarriersController.prototype, "update", null);
CarriersController = __decorate([
    (0, common_1.Controller)('carriers'),
    __metadata("design:paramtypes", [carriers_service_1.CarriersService])
], CarriersController);
exports.CarriersController = CarriersController;
//# sourceMappingURL=carriers.controller.js.map