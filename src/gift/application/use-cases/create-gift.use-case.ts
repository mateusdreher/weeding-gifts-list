import { Gift } from '../../domain/gift.entity';
import { GiftUseCase } from '../../domain/ports/gift.use-case.interface';
import { EntityToResponseMapper } from '../../infrastructure/mappers/entity-to-response.mapper';
import { Injectable, HttpStatus } from '@nestjs/common';
import { CreateGiftDTO, GiftResponseDTO } from '../dtos';
import { GiftRepository } from 'src/gift/domain/ports';

@Injectable()
export class CreateGiftUseCase implements GiftUseCase {
  constructor(private readonly respository: GiftRepository) {}
  async execute(
    CreateGiftDTO: CreateGiftDTO,
  ): Promise<GiftResponseDTO> {
    try {
      const example = new Gift(CreateGiftDTO);

      const result = await this.respository.create(example);

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
