import { GiftStatus } from './../../domain/enums/gift-status.enum';
export declare class GiftDTO {
    id: string;
    name: string;
    link: string;
    price: number;
    personWhoBoughtIt: string;
    status: GiftStatus;
    byLink: boolean;
}
