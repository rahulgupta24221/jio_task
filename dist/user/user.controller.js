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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const common_2 = require("@nestjs/common");
const axios_1 = require("axios");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
let UserController = class UserController {
    constructor(uesrserice, configService) {
        this.uesrserice = uesrserice;
        this.configService = configService;
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
        const cities = await this.uesrserice.findAll();
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
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_2.Query)('city')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getTemperature", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('user'),
    (0, swagger_1.ApiTags)("User"),
    __metadata("design:paramtypes", [user_service_1.UserService,
        config_1.ConfigService])
], UserController);
//# sourceMappingURL=user.controller.js.map