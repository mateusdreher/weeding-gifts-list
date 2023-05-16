import { GiftStatus } from './../../domain/enums/gift-status.enum';
import { ApiProperty } from '@nestjs/swagger';

export class CreateGiftDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  link: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  personWhoBoughtIt?: string;

  @ApiProperty()
  status?: GiftStatus;
}
