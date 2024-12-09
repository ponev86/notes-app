import { Provider } from 'react-redux';

import type { FC, PropsWithChildren } from 'react';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/state-shema';

interface StoreProviderProps extends PropsWithChildren {
  initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
  const { children, initialState } = props;
  const store = createReduxStore(initialState as StateSchema);
  return <Provider store={store}>{children}</Provider>;
};
