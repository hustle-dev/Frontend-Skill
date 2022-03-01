import { useCounter } from 'hooks';
import React from 'react';

export default function Counter() {
  const { counterData, onIncrease, onDecrease, onSetDiff } = useCounter();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSetDiff(parseInt(e.target.value, 10));
  };

  return (
    <div>
      <h1>{counterData.number}</h1>
      <div>
        <input type="number" value={counterData.diff} min="1" onChange={onChange} />
        <button type="button" onClick={onIncrease}>
          +
        </button>
        <button type="button" onClick={onDecrease}>
          -
        </button>
      </div>
    </div>
  );
}
