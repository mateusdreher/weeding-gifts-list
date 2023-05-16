import { GiftUseCase } from '../../domain/ports/gift.use-case.interface';
import { CreateGiftDTO, GiftResponseDTO } from '../dtos';
import { GiftRepository } from 'src/gift/domain/ports';
export declare class CreateGiftUseCase implements GiftUseCase<CreateGiftDTO, GiftResponseDTO> {
    private readonly respository;
    constructor(respository: GiftRepository);
    execute(createGiftDTO: CreateGiftDTO): Promise<GiftResponseDTO>;
}
