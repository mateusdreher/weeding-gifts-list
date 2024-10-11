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
exports.SelectGiftUseCase = void 0;
const entity_to_response_mapper_1 = require("../../infrastructure/mappers/entity-to-response.mapper");
const common_1 = require("@nestjs/common");
const ports_1 = require("../../domain/ports");
const gift_status_enum_1 = require("../../domain/enums/gift-status.enum");
const mail_1 = require("../../../mail");
let SelectGiftUseCase = class SelectGiftUseCase {
    constructor(respository) {
        this.respository = respository;
    }
    async execute(params) {
        console.log(params);
        try {
            const { giftId, personWhoBoughtIt, byLink, otherInfos } = params;
            const gift = await this.respository.getGiftById(giftId);
            if (!gift) {
                throw new common_1.NotFoundException('Gift not found');
            }
            if (gift.status === gift_status_enum_1.GiftStatus.BOUGHT) {
                throw new common_1.NotAcceptableException('Gift is not available');
            }
            gift.personWhoBoughtIt.push(personWhoBoughtIt);
            gift.boughtQuantity += 1;
            gift.status =
                gift.boughtQuantity === gift.expectedQuantity
                    ? gift_status_enum_1.GiftStatus.BOUGHT
                    : gift_status_enum_1.GiftStatus.PARTIAL_BOUGHT;
            const result = await this.respository.selectItem(gift.id, gift.personWhoBoughtIt, byLink, otherInfos, gift.boughtQuantity, gift.status, params.email);
            if (byLink) {
                (0, mail_1.sendMail)(params.email, gift.name, gift.mp_link, params.personWhoBoughtIt);
            }
            (0, mail_1.sendMail)(params.email, gift.name, gift.mp_link, params.personWhoBoughtIt, true);
            return {
                statusCode: common_1.HttpStatus.CREATED,
                message: 'Gift selected successfully',
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
SelectGiftUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [ports_1.GiftRepository])
], SelectGiftUseCase);
exports.SelectGiftUseCase = SelectGiftUseCase;
//# sourceMappingURL=select-gift.use-case.js.map