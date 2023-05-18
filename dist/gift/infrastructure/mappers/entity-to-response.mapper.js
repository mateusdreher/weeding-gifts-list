"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityToResponseMapper = void 0;
class EntityToResponseMapper {
    static map(entity) {
        return {
            id: entity.id,
            name: entity.name,
            link: entity.link,
            price: entity.price,
            personWhoBoughtIt: entity.personWhoBoughtIt,
            status: entity.status,
            byLink: entity.byLink,
            image: entity.image,
        };
    }
}
exports.EntityToResponseMapper = EntityToResponseMapper;
//# sourceMappingURL=entity-to-response.mapper.js.map