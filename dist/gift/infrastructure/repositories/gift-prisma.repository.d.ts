import { Gift } from '../../domain/gift.entity';
import { PrismaClient } from '@prisma/client';
import { GiftRepository } from 'src/gift/domain/ports';
export declare class GiftPrismaRepository implements GiftRepository {
    private readonly prismaClient;
    constructor(prismaClient: PrismaClient);
    create(entity: Gift): Promise<Gift>;
    getGiftById(giftId: string): Promise<Gift>;
    selectItem(giftId: string, personWhoBoughtIt: string, byLink: boolean): Promise<Gift>;
    listGiftsByStatus(status: string): Promise<Gift[]>;
    listAllGifts(): Promise<Gift[]>;
}
