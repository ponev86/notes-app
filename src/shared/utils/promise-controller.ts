export function createManagedPromise<T>(): {
  promise: Promise<T>;
  resolve: (result: T) => void;
  reject: (e: Error) => void;
} {
  let resolve: (result: T) => void = null!;
  let reject: (error: unknown) => void = null!;

  const promise = new Promise<T>((_resolve, _reject) => {
    resolve = _resolve;
    reject = _reject;
  });

  return { promise, resolve, reject };
}

export type TPromiseControls<T> = {
  resolve(result: T): void;
  reject(e: Error): void;
};

export type TPromiseController<T> = Promise<T> & TPromiseControls<T>;

export function createPromiseController<T>(): TPromiseController<T> {
  const data = createManagedPromise<T>();

  const { resolve, reject } = data;
  const promise = data.promise as Promise<T> & TPromiseControls<T>;

  promise.resolve = resolve;
  promise.reject = reject;

  return promise as Promise<T> & TPromiseControls<T>;
}
