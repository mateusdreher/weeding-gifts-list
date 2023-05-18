import { GiftStatus } from './../../domain/enums/gift-status.enum';
export declare class CreateGiftDTO {
    name: string;
    link: string;
    price: number;
    personWhoBoughtIt?: string;
    status?: GiftStatus;
    image?: string;
}
