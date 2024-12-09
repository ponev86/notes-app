import type { StateSchema, ThunkConfig } from './config/state-shema';
import { createReduxStore } from './config/store';
import type { AppDispatch } from './config/store';
import { StoreProvider } from './ui/store-provider';

export {
  StoreProvider,
  createReduxStore,
  StateSchema,
  ThunkConfig,
  AppDispatch,
};
