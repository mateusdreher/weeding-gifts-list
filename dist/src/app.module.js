"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const gift_prisma_repository_1 = require("./gift/infrastructure/repositories/gift-prisma.repository");
const ports_1 = require("./gift/domain/ports");
const client_1 = require("@prisma/client");
const gift_controller_1 = require("./gift/application/presenters/gift.controller");
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const gift_controller_factory_1 = require("./gift/application/presenters/gift.controller.factory");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [app_controller_1.AppController, gift_controller_1.GiftController],
        providers: [
            {
                provide: ports_1.GiftRepository,
                useClass: gift_prisma_repository_1.GiftPrismaRepository,
            },
            client_1.PrismaClient,
            gift_controller_factory_1.createGiftFactory,
            gift_controller_factory_1.selectGiftFactory,
            gift_controller_factory_1.listGiftsByStatusFactory,
            gift_controller_factory_1.listAllGiftsUseCase,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map