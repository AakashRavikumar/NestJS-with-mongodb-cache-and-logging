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
exports.CityPopulationController = void 0;
const common_1 = require("@nestjs/common");
const city_population_service_1 = require("./city_population.service");
const create_city_population_dto_1 = require("./dto/create-city_population.dto");
const cache_manager_1 = require("@nestjs/cache-manager");
let CityPopulationController = class CityPopulationController {
    cityPopulationService;
    constructor(cityPopulationService) {
        this.cityPopulationService = cityPopulationService;
    }
    create(Body) {
        return this.cityPopulationService.create(Body);
    }
    findAll() {
        return this.cityPopulationService.findAll();
    }
};
exports.CityPopulationController = CityPopulationController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_city_population_dto_1.CreateCityPopulationDto]),
    __metadata("design:returntype", void 0)
], CityPopulationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, cache_manager_1.CacheKey)('Cities'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CityPopulationController.prototype, "findAll", null);
exports.CityPopulationController = CityPopulationController = __decorate([
    (0, common_1.Controller)('city-population'),
    (0, common_1.UseInterceptors)(cache_manager_1.CacheInterceptor),
    __metadata("design:paramtypes", [city_population_service_1.CityPopulationService])
], CityPopulationController);
//# sourceMappingURL=city_population.controller.js.map