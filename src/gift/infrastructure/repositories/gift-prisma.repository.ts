import { GiftStatus } from './../../domain/enums/gift-status.enum';
import { Gift } from '../../domain/gift.entity';
import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { GiftRepository } from 'src/gift/domain/ports';

@Injectable()
export class GiftPrismaRepository implements GiftRepository {
  constructor(private readonly prismaClient: PrismaClient) { }

  async create(entity: Gift): Promise<Gift> {
    const result = await this.prismaClient.gift.create({
      data: entity,
    });

    const { status, ...rest } = result;

    return new Gift({
      ...rest,
      status: GiftStatus[status as keyof typeof GiftStatus] as GiftStatus,
    });
  }

  async getGiftById(giftId: string): Promise<Gift> {
    const result = await this.prismaClient.gift.findUnique({
      where: { id: giftId },
    });

    if (!result) {
      throw new Error('Gift not found');
    }
    const { status, ...rest } = result;

    return new Gift({
      ...rest,
      status: GiftStatus[status as keyof typeof GiftStatus] as GiftStatus,
    });
  }

  async selectItem(
    giftId: string,
    personWhoBoughtIt: string[],
    byLink: boolean,
    otherInfos: any,
    boughtQuantity: number,
    newStatus: string,
    email: string = ""
  ): Promise<Gift> {
    const result = await this.prismaClient.gift.update({
      where: { id: giftId },
      data: {
        status: newStatus,
        personWhoBoughtIt,
        byLink,
        otherInfos: {email},
        boughtAt: new Date(),
        boughtQuantity,
      },
    });

    const { status, ...rest } = result;

    return new Gift({
      ...rest,
      status: GiftStatus[status as keyof typeof GiftStatus] as GiftStatus,
    });
  }

  async listGiftsByStatus(where: Prisma.GiftWhereInput): Promise<Gift[]> {
    const result = await this.prismaClient.gift.findMany({
      where,
    });
    return result.map((gift) => {
      const { status, ...rest } = gift;

      return new Gift({
        ...rest,
        status: GiftStatus[status as keyof typeof GiftStatus] as GiftStatus,
      });
    });
  }

  async listAllGifts(): Promise<Gift[]> {
    const result = await this.prismaClient.gift.findMany();

    return result.map((gift) => {
      const { status, ...rest } = gift;

      return new Gift({
        ...rest,
        status: GiftStatus[status as keyof typeof GiftStatus] as GiftStatus,
      });
    });
  }
}
