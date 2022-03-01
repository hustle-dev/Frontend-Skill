import { RootState } from 'modules';
import { decrease, increase } from 'modules/counter';
import { useDispatch, useSelector } from 'react-redux';

export const useCounter = () => {
  const number = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());

  return { number, onIncrease, onDecrease };
};
