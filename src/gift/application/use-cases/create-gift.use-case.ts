import { Gift } from '../../domain/gift.entity';
import { GiftUseCase } from '../../domain/ports/gift.use-case.interface';
import { EntityToResponseMapper } from '../../infrastructure/mappers/entity-to-response.mapper';
import { Injectable, HttpStatus } from '@nestjs/common';
import { CreateGiftDTO, GiftResponseDTO } from '../dtos';
import { GiftRepository } from 'src/gift/domain/ports';
import { GiftStatus } from 'src/gift/domain/enums/gift-status.enum';

@Injectable()
export class CreateGiftUseCase
  implements GiftUseCase<CreateGiftDTO, GiftResponseDTO>
{
  constructor(private readonly respository: GiftRepository) {}
  async execute(createGiftDTO: CreateGiftDTO): Promise<GiftResponseDTO> {
    try {
      const gift = new Gift(createGiftDTO);
      if (!gift.status) {
        gift.status = GiftStatus.AVAILABLE;
      }
      const result = await this.respository.create(gift);

      return {
        statusCode: HttpStatus.CREATED,
        message: 'Gift created successfully',
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
