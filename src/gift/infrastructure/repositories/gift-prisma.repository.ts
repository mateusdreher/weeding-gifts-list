import { Gift } from '../../domain/gift.entity';
import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { GiftRepository } from 'src/example/domain/ports';

@Injectable()
export class GiftPrismaRepository implements GiftRepository {
  constructor(private readonly prismaClient: PrismaClient) {}

  async create(entity: Gift): Promise<Gift> {
    const result = await this.prismaClient.gift.create({
      data: entity as any,
    });

    return new Gift(result);
  }
}
