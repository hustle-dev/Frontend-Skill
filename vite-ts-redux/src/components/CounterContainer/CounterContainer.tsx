import { useDispatch, useSelector } from 'react-redux';
import { Counter } from 'components';
import { decrease, increase, setDiff } from 'modules/counter';
import { RootState } from 'modules';

export default function CounterContainer() {
  const { number, diff } = useSelector((state: RootState) => ({
    number: state.counter.number,
    diff: state.counter.diff,
  }));

  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff: number) => dispatch(setDiff(diff));

  return <Counter number={number} diff={diff} onIncrease={onIncrease} onDecrease={onDecrease} onSetDiff={onSetDiff} />;
}
