"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCityPopulationDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_city_population_dto_1 = require("./create-city_population.dto");
class UpdateCityPopulationDto extends (0, mapped_types_1.PartialType)(create_city_population_dto_1.CreateCityPopulationDto) {
}
exports.UpdateCityPopulationDto = UpdateCityPopulationDto;
//# sourceMappingURL=update-city_population.dto.js.map