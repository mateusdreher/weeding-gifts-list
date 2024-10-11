import { Gift } from '../../domain/gift.entity';
import { Prisma, PrismaClient } from '@prisma/client';
import { GiftRepository } from 'src/gift/domain/ports';
export declare class GiftPrismaRepository implements GiftRepository {
    private readonly prismaClient;
    constructor(prismaClient: PrismaClient);
    create(entity: Gift): Promise<Gift>;
    getGiftById(giftId: string): Promise<Gift>;
    selectItem(giftId: string, personWhoBoughtIt: string[], byLink: boolean, otherInfos: any, boughtQuantity: number, newStatus: string, email?: string): Promise<Gift>;
    listGiftsByStatus(where: Prisma.GiftWhereInput): Promise<Gift[]>;
    listAllGifts(): Promise<Gift[]>;
}
