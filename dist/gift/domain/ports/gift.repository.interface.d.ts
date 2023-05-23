import { Gift } from '../gift.entity';
export declare abstract class GiftRepository {
    abstract create(entity: Gift): Promise<Gift>;
    abstract getGiftById(giftId: string): Promise<Gift>;
    abstract selectItem(giftId: string, personWhoBoughtIt: string, byLink: boolean, otherInfos: any): Promise<Gift>;
    abstract listGiftsByStatus(status: string): Promise<Gift[]>;
    abstract listAllGifts(): Promise<Gift[]>;
}
