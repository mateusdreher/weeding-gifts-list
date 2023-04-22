import { GiftUseCase } from '../../domain/ports/gift.use-case.interface';
import { Body, Controller, Inject, Post } from '@nestjs/common';
import {
  CreateGiftDTO,
  GiftResponseDTO,
} from 'src/gift/application/dtos';

@Controller('/gifts')
export class GiftController {
  constructor(
    @Inject('CreateGiftUseCase')
    private readonly createGiftUseCase: GiftUseCase,
  ) {}

  @Post()
  async createGift(
    @Body() CreateGiftDTO: CreateGiftDTO,
  ): Promise<GiftResponseDTO> {
    return await this.createGiftUseCase.execute(CreateGiftDTO);
  }
}
