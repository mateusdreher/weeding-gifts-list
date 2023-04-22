import { ApiProperty } from '@nestjs/swagger';
export class GiftDTO {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  link: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  personWhoBoughtIt: string;

  @ApiProperty()
  status: string;
}
