"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listAllGiftsUseCase = exports.listGiftsByStatusFactory = exports.selectGiftFactory = exports.createGiftFactory = void 0;
const list_all_gifts_use_case_1 = require("./../use-cases/list-all-gifts.use-case");
const select_gift_use_case_1 = require("./../use-cases/select-gift.use-case");
const create_gift_use_case_1 = require("../use-cases/create-gift.use-case");
const list_gifts_by_status_use_case_1 = require("../use-cases/list-gifts-by-status.use-case");
exports.createGiftFactory = {
    provide: 'CreateGiftUseCase',
    useClass: create_gift_use_case_1.CreateGiftUseCase,
};
exports.selectGiftFactory = {
    provide: 'SelectGiftUseCase',
    useClass: select_gift_use_case_1.SelectGiftUseCase,
};
exports.listGiftsByStatusFactory = {
    provide: 'ListGiftsByStatusUseCase',
    useClass: list_gifts_by_status_use_case_1.ListGiftsByStatusUseCase,
};
exports.listAllGiftsUseCase = {
    provide: 'ListAllGiftsUseCase',
    useClass: list_all_gifts_use_case_1.ListAllGiftsUseCase,
};
//# sourceMappingURL=gift.controller.factory.js.map