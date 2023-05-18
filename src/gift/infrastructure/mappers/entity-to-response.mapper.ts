import { GiftDTO } from '../../application/dtos/gift.dto';
import { Gift } from '../../domain/gift.entity';
export class EntityToResponseMapper {
  public static map(entity: Gift): GiftDTO {
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
