import { GiftStatus } from './enums/gift-status.enum';
export declare class Gift {
    id: string;
    name: string;
    link: string;
    price: number;
    personWhoBoughtIt: string[];
    status: GiftStatus;
    byLink: boolean;
    image: string;
    otherInfos?: any;
    expectedQuantity: number;
    boughtQuantity: number;
    constructor(props: Partial<Gift>);
}
