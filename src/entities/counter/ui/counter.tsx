import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/button/button';
import type { FC } from 'react';
import { getCounterValue } from '../model/selectors/get-counter-value';
import { counterActions } from '../model/slice/counter-slice';

export const Counter: FC = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <div>
      <h3>{counterValue}</h3>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </div>
  );
};
