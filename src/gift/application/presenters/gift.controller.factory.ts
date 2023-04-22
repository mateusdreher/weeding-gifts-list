import { CreateGiftUseCase } from '../use-cases/create-gift.use-case';

import { Provider } from '@nestjs/common';

export const createGiftFactory: Provider = {
  provide: 'CreateGiftUseCase',
  useClass: CreateGiftUseCase,
};
