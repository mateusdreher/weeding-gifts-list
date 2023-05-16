import { GiftUseCase } from '../../domain/ports/gift.use-case.interface';
import { GiftResponseDTO } from '../dtos';
import { GiftRepository } from 'src/gift/domain/ports';
export declare class ListGiftsByStatusUseCase implements GiftUseCase<string, GiftResponseDTO> {
    private readonly respository;
    constructor(respository: GiftRepository);
    execute(status: string): Promise<GiftResponseDTO>;
}
