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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGiftUseCase = void 0;
const gift_entity_1 = require("../../domain/gift.entity");
const entity_to_response_mapper_1 = require("../../infrastructure/mappers/entity-to-response.mapper");
const common_1 = require("@nestjs/common");
const ports_1 = require("../../domain/ports");
const gift_status_enum_1 = require("../../domain/enums/gift-status.enum");
let CreateGiftUseCase = class CreateGiftUseCase {
    constructor(respository) {
        this.respository = respository;
    }
    async execute(createGiftDTO) {
        try {
            const gift = new gift_entity_1.Gift(createGiftDTO);
            if (!gift.status) {
                gift.status = gift_status_enum_1.GiftStatus.AVAILABLE;
            }
            const result = await this.respository.create(gift);
            return {
                statusCode: common_1.HttpStatus.CREATED,
                message: 'Gift created successfully',
                data: entity_to_response_mapper_1.EntityToResponseMapper.map(result),
            };
        }
        catch (error) {
            throw {
                statusCode: error.status || common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                message: error.message || 'Internal server error',
            };
        }
    }
};
CreateGiftUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [ports_1.GiftRepository])
], CreateGiftUseCase);
exports.CreateGiftUseCase = CreateGiftUseCase;
//# sourceMappingURL=create-gift.use-case.js.map