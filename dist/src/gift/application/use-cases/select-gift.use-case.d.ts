import { GiftUseCase } from '../../domain/ports/gift.use-case.interface';
import { GiftResponseDTO, SelectGiftDTO } from '../dtos';
import { GiftRepository } from 'src/gift/domain/ports';
export declare class SelectGiftUseCase implements GiftUseCase<SelectGiftDTO, GiftResponseDTO> {
    private readonly respository;
    constructor(respository: GiftRepository);
    execute(params: SelectGiftDTO): Promise<GiftResponseDTO>;
}
