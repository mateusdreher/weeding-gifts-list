export class Gift {
  public id: string;
  public name: string;
  public link: string;
  public price: number;
  public personWhoBoughtIt: string;
  public status: string;

  constructor(props: Partial<Gift>) {
    Object.assign(this, props);
  }
}
