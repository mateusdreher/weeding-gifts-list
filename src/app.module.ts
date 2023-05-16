import { GiftPrismaRepository } from './gift/infrastructure/repositories/gift-prisma.repository';
import { GiftRepository } from 'src/gift/domain/ports';
import { PrismaClient } from '@prisma/client';
import { GiftController } from './gift/application/presenters/gift.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {
  createGiftFactory,
  listAllGiftsUseCase,
  listGiftsByStatusFactory,
  selectGiftFactory,
} from './gift/application/presenters/gift.controller.factory';

@Module({
  imports: [],
  controllers: [AppController, GiftController],
  providers: [
    {
      provide: GiftRepository,
      useClass: GiftPrismaRepository,
    },
    PrismaClient,
    createGiftFactory,
    selectGiftFactory,
    listGiftsByStatusFactory,
    listAllGiftsUseCase,
  ],
})
export class AppModule {}
