import { GiftUseCase } from '../../domain/ports/gift.use-case.interface';
import { GiftResponseDTO } from '../dtos';
import { GiftRepository } from 'src/gift/domain/ports';
export declare class ListAllGiftsUseCase implements GiftUseCase<undefined, GiftResponseDTO> {
    private readonly respository;
    constructor(respository: GiftRepository);
    execute(): Promise<GiftResponseDTO>;
}
