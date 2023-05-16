"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gift = void 0;
const gift_status_enum_1 = require("./enums/gift-status.enum");
class Gift {
    constructor(props) {
        this.status = gift_status_enum_1.GiftStatus.AVAILABLE;
        Object.assign(this, props);
    }
}
exports.Gift = Gift;
//# sourceMappingURL=gift.entity.js.map