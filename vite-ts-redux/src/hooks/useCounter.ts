import { RootState } from 'modules';
import { decrease, increase, setDiff } from 'modules/counter';
import { useDispatch, useSelector } from 'react-redux';

export const useCounter = () => {
  // shallow Equal 사용 혹은 useSelector 여러번 혹은 디스트럭처링 할당
  const { number, diff } = useSelector((state: RootState) => state.counter);

  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff: number) => dispatch(setDiff(diff));

  return { counterData: { number, diff }, onIncrease, onDecrease, onSetDiff };
};
