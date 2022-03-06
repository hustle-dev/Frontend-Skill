import { RootState } from 'modules';
import { decrease, decreaseAsync, increase, increaseAsync } from 'modules/counter';
import { useDispatch, useSelector } from 'react-redux';

export const useCounter = () => {
  const number = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increaseAsync());
  const onDecrease = () => dispatch(decreaseAsync());

  return { number, onIncrease, onDecrease };
};
