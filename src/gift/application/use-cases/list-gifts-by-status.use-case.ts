import { GiftUseCase } from '../../domain/ports/gift.use-case.interface';
import { EntityToResponseMapper } from '../../infrastructure/mappers/entity-to-response.mapper';
import {
  Injectable,
  HttpStatus,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { GiftResponseDTO } from '../dtos';
import { GiftRepository } from 'src/gift/domain/ports';
import { GiftStatus } from 'src/gift/domain/enums/gift-status.enum';

@Injectable()
export class ListGiftsByStatusUseCase
  implements GiftUseCase<string, GiftResponseDTO>
{
  constructor(private readonly respository: GiftRepository) {}
  async execute(status: string): Promise<GiftResponseDTO> {
    try {
      const gifts = await this.respository.listGiftsByStatus(status);

      if (!gifts?.length) {
        throw new NotFoundException('No gifts found with this status');
      }

      return {
        statusCode: HttpStatus.ACCEPTED,
        message: `Gifts listed successfully with status ${status}`,
        data: gifts.map((gift) => EntityToResponseMapper.map(gift)),
      };
    } catch (error) {
      throw {
        statusCode: error.status || HttpStatus.INTERNAL_SERVER_ERROR,
        message: error.message || 'Internal server error',
      };
    }
  }
}
