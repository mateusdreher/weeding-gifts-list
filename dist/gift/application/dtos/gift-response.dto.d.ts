import { GiftDTO } from './gift.dto';
export declare class GiftResponseDTO {
    statusCode: number;
    message: string;
    data: GiftDTO | GiftDTO[];
}
