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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const axios_1 = require("axios");
const common_2 = require("@nestjs/common");
const city_service_1 = require("./city/city.service");
const city_dto_1 = require("./city/dto/city.dto");
const common_3 = require("@nestjs/common");
const common_4 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
let AppController = class AppController {
    constructor(appService, cityService, configService) {
        this.appService = appService;
        this.cityService = cityService;
        this.configService = configService;
        console.log(`API KEY is ${this.configService.get('API_KEY')}`);
    }
    async getCityTemperature(city) {
        const api_key = this.configService.get('API_KEY');
        let final_response = "";
        await axios_1.default.get(`http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}&aqi=no`)
            .then(function (response) {
            final_response = response.data;
        });
        return final_response;
    }
    async getTemperature(city) {
        console.log("Input city = " + city);
        const cities = await this.cityService.findAll();
        if (city) {
            return [await this.getCityTemperature(city)];
        }
        else {
            let result = [];
            for (let i = 0; i < cities.length; i++) {
                result.push(await this.getCityTemperature(cities[i].name));
            }
            return result;
        }
    }
    async findAll() {
        return this.cityService.findAll();
    }
    async create(cityDto) {
        await this.cityService.create(cityDto);
    }
    async delete(id) {
        return this.cityService.delete(id);
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_2.Query)('city')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getTemperature", null);
__decorate([
    (0, common_1.Get)("/cities"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "findAll", null);
__decorate([
    (0, common_4.Post)("/cities"),
    __param(0, (0, common_3.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [city_dto_1.CityDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "create", null);
__decorate([
    (0, common_4.Delete)('/cities/:id'),
    __param(0, (0, common_4.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "delete", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    (0, swagger_1.ApiTags)('User'),
    __metadata("design:paramtypes", [app_service_1.AppService,
        city_service_1.CityService,
        config_1.ConfigService])
], AppController);
//# sourceMappingURL=app.controller.js.map