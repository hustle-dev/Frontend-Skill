import { CounterProps } from './Counter.types';

export default function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }: CounterProps) {
  const onChange = (e: any) => {
    onSetDiff(parseInt(e.target.value, 10));
  };

  return (
    <div>
      <h1>{number}</h1>
      <div>
        <input type="number" value={diff} min="1" onChange={onChange} />
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
