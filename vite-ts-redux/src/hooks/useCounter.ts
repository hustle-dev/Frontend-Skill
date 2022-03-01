import { RootState } from 'modules';
import { decrease, increase, setDiff } from 'modules/counter';
import { useDispatch, useSelector } from 'react-redux';

export const useCounter = () => {
  const { number, diff } = useSelector((state: RootState) => ({
    number: state.counter.number,
    diff: state.counter.diff,
  }));

  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff: number) => dispatch(setDiff(diff));

  return { counterData: { number, diff }, onIncrease, onDecrease, onSetDiff };
};
