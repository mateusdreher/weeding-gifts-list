import { Gift } from '../gift.entity';

export abstract class GiftRepository {
  abstract create(entity: Gift): Promise<Gift>;
}
