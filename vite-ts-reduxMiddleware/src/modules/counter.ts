import { Action, Dispatch } from 'redux';

// 액션 타입
const INCREASE = 'INCREASE' as const;
const DECREASE = 'DECREASE' as const;

// 액션 생성 함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

export const increaseAsync = () => (dispatch: Dispatch<Action>) => {
  setTimeout(() => dispatch(increase()), 1000);
};

export const decreaseAsync = () => (dispatch: Dispatch<Action>) => {
  setTimeout(() => dispatch(decrease()), 1000);
};

// 초기값
const initialState = 0;

type CounterState = number;

type CounterAction = ReturnType<typeof increase> | ReturnType<typeof decrease>;

export default function counter(state: CounterState = initialState, action: CounterAction) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}
