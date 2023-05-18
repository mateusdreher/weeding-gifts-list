import { GiftDTO } from './gift.dto';
import { ApiProperty } from '@nestjs/swagger';

export class GiftResponseDTO {
  @ApiProperty()
  statusCode: number;

  @ApiProperty()
  message: string;

  @ApiProperty()
  data: GiftDTO | GiftDTO[];

  @ApiProperty()
  image?: string;
}
