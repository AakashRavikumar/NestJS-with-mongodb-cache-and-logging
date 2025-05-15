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
exports.CityPopulationService = void 0;
const common_1 = require("@nestjs/common");
const city_population_entity_1 = require("./entities/city_population.entity");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const cache_manager_1 = require("@nestjs/cache-manager");
const nestjs_pino_1 = require("nestjs-pino");
let CityPopulationService = class CityPopulationService {
    cityModel;
    cacheManager;
    logger;
    constructor(cityModel, cacheManager, logger) {
        this.cityModel = cityModel;
        this.cacheManager = cacheManager;
        this.logger = logger;
    }
    async create(Body) {
        try {
            const result = await this.cityModel.create(Body);
            await this.cacheManager.del('Cities');
            return result;
        }
        catch (err) {
            if (err.code == 11000)
                return { message: 'Duplicate City!' };
            return { message: 'Internal Server Error!' };
        }
    }
    findAll() {
        try {
            return this.cityModel.find().exec();
        }
        catch (err) {
            return { message: 'Internal Server Error!' };
        }
    }
};
exports.CityPopulationService = CityPopulationService;
exports.CityPopulationService = CityPopulationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(city_population_entity_1.CityPopulation.name)),
    __param(1, (0, common_1.Inject)(cache_manager_1.CACHE_MANAGER)),
    __metadata("design:paramtypes", [mongoose_2.Model, Object, nestjs_pino_1.Logger])
], CityPopulationService);
//# sourceMappingURL=city_population.service.js.map