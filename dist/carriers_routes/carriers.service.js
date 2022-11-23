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
exports.CarriersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const carriers_schema_1 = require("./schemas/carriers.schema");
const mongoose_2 = require("mongoose");
let CarriersService = class CarriersService {
    constructor(carrierModel) {
        this.carrierModel = carrierModel;
    }
    async getAll() {
        return this.carrierModel.find().exec();
    }
    async getById(id) {
        return this.carrierModel.findById(id);
    }
    async create(carrierDto) {
        const newCarrier = new this.carrierModel(carrierDto);
        return newCarrier.save();
    }
    async remove(id) {
        return this.carrierModel.findByIdAndRemove(id);
    }
    async update(id, carrierDto) {
        return this.carrierModel.findByIdAndUpdate(id, carrierDto, { new: true });
    }
};
CarriersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(carriers_schema_1.Carrier.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CarriersService);
exports.CarriersService = CarriersService;
//# sourceMappingURL=carriers.service.js.map