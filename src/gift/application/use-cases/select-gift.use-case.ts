import { GiftUseCase } from '../../domain/ports/gift.use-case.interface';
import { EntityToResponseMapper } from '../../infrastructure/mappers/entity-to-response.mapper';
import {
  Injectable,
  HttpStatus,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { GiftResponseDTO, SelectGiftDTO } from '../dtos';
import { GiftRepository } from 'src/gift/domain/ports';
import { GiftStatus } from 'src/gift/domain/enums/gift-status.enum';

@Injectable()
export class SelectGiftUseCase
  implements GiftUseCase<SelectGiftDTO, GiftResponseDTO>
{
  constructor(private readonly respository: GiftRepository) {}
  async execute(params: SelectGiftDTO): Promise<GiftResponseDTO> {
    try {
      const { giftId, personWhoBoughtIt, byLink } = params;
      const gift = await this.respository.getGiftById(giftId);

      if (!gift) {
        throw new NotFoundException('Gift not found');
      }

      if (gift.status !== GiftStatus.AVAILABLE) {
        throw new NotAcceptableException('Gift is not available');
      }

      gift.status = GiftStatus.BOUGHT;

      const result = await this.respository.selectItem(
        gift.id,
        personWhoBoughtIt,
        byLink,
      );

      return {
        statusCode: HttpStatus.CREATED,
        message: 'Gift selected successfully',
        data: EntityToResponseMapper.map(result),
      };
    } catch (error) {
      throw {
        statusCode: error.status || HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message || 'Internal server error',
      };
    }
  }
}
