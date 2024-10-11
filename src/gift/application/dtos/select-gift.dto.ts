import { ApiProperty } from '@nestjs/swagger';
export class SelectGiftDTO {
  @ApiProperty()
  giftId: string;

  @ApiProperty()
  personWhoBoughtIt: string;

  @ApiProperty()
  byLink: boolean;

  otherInfos?: any;

  @ApiProperty()
  email: string;
}
