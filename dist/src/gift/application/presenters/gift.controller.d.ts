import { SelectGiftDTO } from './../dtos/select-gift.dto';
import { GiftUseCase } from '../../domain/ports/gift.use-case.interface';
import { CreateGiftDTO, GiftResponseDTO } from 'src/gift/application/dtos';
export declare class GiftController {
    private readonly createGiftUseCase;
    private readonly selectGiftUseCase;
    private readonly listAllGiftsUseCase;
    private readonly listGiftsByStatusUseCase;
    constructor(createGiftUseCase: GiftUseCase<any, any>, selectGiftUseCase: GiftUseCase<any, any>, listAllGiftsUseCase: GiftUseCase<any, any>, listGiftsByStatusUseCase: GiftUseCase<any, any>);
    createGift(CreateGiftDTO: CreateGiftDTO): Promise<GiftResponseDTO>;
    selectGift(selectGiftDTO: SelectGiftDTO): Promise<GiftResponseDTO>;
    listAllStatus(): Promise<GiftResponseDTO>;
    listGiftsByStatus(status: string): Promise<GiftResponseDTO>;
}
