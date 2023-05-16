import { SelectGiftDTO } from './../dtos/select-gift.dto';
import { GiftUseCase } from '../../domain/ports/gift.use-case.interface';
import { Body, Controller, Inject, Post, Get, Param } from '@nestjs/common';
import { CreateGiftDTO, GiftResponseDTO } from 'src/gift/application/dtos';

@Controller('/gifts')
export class GiftController {
  constructor(
    @Inject('CreateGiftUseCase')
    private readonly createGiftUseCase: GiftUseCase<any, any>,
    @Inject('SelectGiftUseCase')
    private readonly selectGiftUseCase: GiftUseCase<any, any>,
    @Inject('ListAllGiftsUseCase')
    private readonly listAllGiftsUseCase: GiftUseCase<any, any>,
    @Inject('ListGiftsByStatusUseCase')
    private readonly listGiftsByStatusUseCase: GiftUseCase<any, any>,
  ) {}

  @Post()
  async createGift(
    @Body() CreateGiftDTO: CreateGiftDTO,
  ): Promise<GiftResponseDTO> {
    return await this.createGiftUseCase.execute(CreateGiftDTO);
  }

  @Post('/select')
  async selectGift(
    @Body() selectGiftDTO: SelectGiftDTO,
  ): Promise<GiftResponseDTO> {
    return await this.selectGiftUseCase.execute(selectGiftDTO);
  }

  @Get('/list')
  async listAllStatus(): Promise<GiftResponseDTO> {
    return await this.listAllGiftsUseCase.execute();
  }

  @Get('/list/:status')
  async listGiftsByStatus(
    @Param('status') status: string,
  ): Promise<GiftResponseDTO> {
    return await this.listGiftsByStatusUseCase.execute(status);
  }
}
