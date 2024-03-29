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
exports.CarriersRoutesController = void 0;
const common_1 = require("@nestjs/common");
const carriersRoutes_service_1 = require("./carriersRoutes.service");
const create_carriersRoute_dto_1 = require("./dto/create-carriersRoute.dto");
const update_carriersRoute_dto_1 = require("./dto/update-carriersRoute.dto");
let CarriersRoutesController = class CarriersRoutesController {
    constructor(carriersRoutesService) {
        this.carriersRoutesService = carriersRoutesService;
    }
    getAll() {
        return this.carriersRoutesService.getAll();
    }
    getOne(id) {
        return this.carriersRoutesService.getById(id);
    }
    create(createCarriersRouteDto) {
        return this.carriersRoutesService.create(createCarriersRouteDto);
    }
    remove(id) {
        return this.carriersRoutesService.remove(id);
    }
    update(updateCarriersRouteDto, id) {
        return this.carriersRoutesService.update(id, updateCarriersRouteDto);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CarriersRoutesController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CarriersRoutesController.prototype, "getOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_carriersRoute_dto_1.CreateCarriersRouteDto]),
    __metadata("design:returntype", Promise)
], CarriersRoutesController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CarriersRoutesController.prototype, "remove", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_carriersRoute_dto_1.UpdateCarriersRouteDto, String]),
    __metadata("design:returntype", Promise)
], CarriersRoutesController.prototype, "update", null);
CarriersRoutesController = __decorate([
    (0, common_1.Controller)('carriersRoutes'),
    __metadata("design:paramtypes", [carriersRoutes_service_1.CarriersRoutesService])
], CarriersRoutesController);
exports.CarriersRoutesController = CarriersRoutesController;
//# sourceMappingURL=carriersRoutes.controller.js.map