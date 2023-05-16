export interface GiftUseCase<T, R> {
  execute(params?: T): Promise<R>;
}
