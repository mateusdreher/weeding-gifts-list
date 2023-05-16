import { GiftStatus } from './enums/gift-status.enum';
export class Gift {
  public id: string;
  public name: string;
  public link: string;
  public price: number;
  public personWhoBoughtIt: string;
  public status: GiftStatus = GiftStatus.AVAILABLE;
  public byLink: boolean;

  constructor(props: Partial<Gift>) {
    Object.assign(this, props);
  }
}
