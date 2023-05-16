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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiftPrismaRepository = void 0;
const gift_status_enum_1 = require("./../../domain/enums/gift-status.enum");
const gift_entity_1 = require("../../domain/gift.entity");
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let GiftPrismaRepository = class GiftPrismaRepository {
    constructor(prismaClient) {
        this.prismaClient = prismaClient;
    }
    async create(entity) {
        const result = await this.prismaClient.gift.create({
            data: entity,
        });
        const { status } = result, rest = __rest(result, ["status"]);
        return new gift_entity_1.Gift(Object.assign(Object.assign({}, rest), { status: gift_status_enum_1.GiftStatus[status] }));
    }
    async getGiftById(giftId) {
        const result = await this.prismaClient.gift.findUnique({
            where: { id: giftId },
        });
        if (!result) {
            throw new Error('Gift not found');
        }
        const { status } = result, rest = __rest(result, ["status"]);
        return new gift_entity_1.Gift(Object.assign(Object.assign({}, rest), { status: gift_status_enum_1.GiftStatus[status] }));
    }
    async selectItem(giftId, personWhoBoughtIt, byLink) {
        const result = await this.prismaClient.gift.update({
            where: { id: giftId },
            data: {
                status: gift_status_enum_1.GiftStatus.BOUGHT,
                personWhoBoughtIt,
                byLink,
                boughtAt: new Date(),
            },
        });
        const { status } = result, rest = __rest(result, ["status"]);
        return new gift_entity_1.Gift(Object.assign(Object.assign({}, rest), { status: gift_status_enum_1.GiftStatus[status] }));
    }
    async listGiftsByStatus(status) {
        const result = await this.prismaClient.gift.findMany({
            where: { status },
        });
        return result.map((gift) => {
            const { status } = gift, rest = __rest(gift, ["status"]);
            return new gift_entity_1.Gift(Object.assign(Object.assign({}, rest), { status: gift_status_enum_1.GiftStatus[status] }));
        });
    }
    async listAllGifts() {
        const result = await this.prismaClient.gift.findMany();
        return result.map((gift) => {
            const { status } = gift, rest = __rest(gift, ["status"]);
            return new gift_entity_1.Gift(Object.assign(Object.assign({}, rest), { status: gift_status_enum_1.GiftStatus[status] }));
        });
    }
};
GiftPrismaRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [client_1.PrismaClient])
], GiftPrismaRepository);
exports.GiftPrismaRepository = GiftPrismaRepository;
//# sourceMappingURL=gift-prisma.repository.js.map