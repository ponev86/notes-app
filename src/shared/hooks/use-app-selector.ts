import { useSelector } from 'react-redux';

import type { StateSchema } from 'app/providers/store';

export const useAppSelector = useSelector.withTypes<StateSchema>();
