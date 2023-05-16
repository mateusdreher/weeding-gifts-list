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
exports.GiftController = void 0;
const select_gift_dto_1 = require("./../dtos/select-gift.dto");
const common_1 = require("@nestjs/common");
const dtos_1 = require("../dtos");
let GiftController = class GiftController {
    constructor(createGiftUseCase, selectGiftUseCase, listAllGiftsUseCase, listGiftsByStatusUseCase) {
        this.createGiftUseCase = createGiftUseCase;
        this.selectGiftUseCase = selectGiftUseCase;
        this.listAllGiftsUseCase = listAllGiftsUseCase;
        this.listGiftsByStatusUseCase = listGiftsByStatusUseCase;
    }
    async createGift(CreateGiftDTO) {
        return await this.createGiftUseCase.execute(CreateGiftDTO);
    }
    async selectGift(selectGiftDTO) {
        return await this.selectGiftUseCase.execute(selectGiftDTO);
    }
    async listAllStatus() {
        return await this.listAllGiftsUseCase.execute();
    }
    async listGiftsByStatus(status) {
        return await this.listGiftsByStatusUseCase.execute(status);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dtos_1.CreateGiftDTO]),
    __metadata("design:returntype", Promise)
], GiftController.prototype, "createGift", null);
__decorate([
    (0, common_1.Post)('/select'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [select_gift_dto_1.SelectGiftDTO]),
    __metadata("design:returntype", Promise)
], GiftController.prototype, "selectGift", null);
__decorate([
    (0, common_1.Get)('/list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GiftController.prototype, "listAllStatus", null);
__decorate([
    (0, common_1.Get)('/list/:status'),
    __param(0, (0, common_1.Param)('status')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GiftController.prototype, "listGiftsByStatus", null);
GiftController = __decorate([
    (0, common_1.Controller)('/gifts'),
    __param(0, (0, common_1.Inject)('CreateGiftUseCase')),
    __param(1, (0, common_1.Inject)('SelectGiftUseCase')),
    __param(2, (0, common_1.Inject)('ListAllGiftsUseCase')),
    __param(3, (0, common_1.Inject)('ListGiftsByStatusUseCase')),
    __metadata("design:paramtypes", [Object, Object, Object, Object])
], GiftController);
exports.GiftController = GiftController;
//# sourceMappingURL=gift.controller.js.map