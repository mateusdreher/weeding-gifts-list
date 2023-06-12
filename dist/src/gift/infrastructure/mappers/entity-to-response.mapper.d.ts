import { GiftDTO } from '../../application/dtos/gift.dto';
import { Gift } from '../../domain/gift.entity';
export declare class EntityToResponseMapper {
    static map(entity: Gift): GiftDTO;
}
