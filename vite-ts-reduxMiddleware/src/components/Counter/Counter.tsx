import { useCounter } from 'hooks';

export default function Counter() {
  const { number, onIncrease, onDecrease } = useCounter();

  return (
    <div>
      <h1>{number}</h1>
      <button type="button" onClick={onIncrease}>
        +1
      </button>
      <button type="button" onClick={onDecrease}>
        -1
      </button>
    </div>
  );
}
