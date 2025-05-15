"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CityPopulationModule = void 0;
const common_1 = require("@nestjs/common");
const city_population_service_1 = require("./city_population.service");
const city_population_controller_1 = require("./city_population.controller");
const city_population_entity_1 = require("./entities/city_population.entity");
const mongoose_1 = require("@nestjs/mongoose");
let CityPopulationModule = class CityPopulationModule {
};
exports.CityPopulationModule = CityPopulationModule;
exports.CityPopulationModule = CityPopulationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: city_population_entity_1.CityPopulation.name, schema: city_population_entity_1.CitySchema },
            ]),
        ],
        controllers: [city_population_controller_1.CityPopulationController],
        providers: [city_population_service_1.CityPopulationService],
    })
], CityPopulationModule);
//# sourceMappingURL=city_population.module.js.map