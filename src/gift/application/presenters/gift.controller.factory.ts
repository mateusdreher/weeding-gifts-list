import { ListAllGiftsUseCase } from './../use-cases/list-all-gifts.use-case';
import { SelectGiftUseCase } from './../use-cases/select-gift.use-case';
import { CreateGiftUseCase } from '../use-cases/create-gift.use-case';

import { Provider } from '@nestjs/common';
import { ListGiftsByStatusUseCase } from '../use-cases/list-gifts-by-status.use-case';

export const createGiftFactory: Provider = {
  provide: 'CreateGiftUseCase',
  useClass: CreateGiftUseCase,
};

export const selectGiftFactory: Provider = {
  provide: 'SelectGiftUseCase',
  useClass: SelectGiftUseCase,
};

export const listGiftsByStatusFactory: Provider = {
  provide: 'ListGiftsByStatusUseCase',
  useClass: ListGiftsByStatusUseCase,
};

export const listAllGiftsUseCase: Provider = {
  provide: 'ListAllGiftsUseCase',
  useClass: ListAllGiftsUseCase,
};
