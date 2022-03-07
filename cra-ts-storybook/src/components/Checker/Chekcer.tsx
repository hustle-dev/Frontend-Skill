import { Wrapper } from './Checker.styled';
import { CheckerProps } from './Checker.types';

export default function Checker({ label, checked, loading, size, onChange }: CheckerProps) {
  return (
    <Wrapper $size={size} checked={checked} $loading={loading.toString()}>
      <input type="checkbox" aria-label={label} checked={checked} onChange={onChange} />
    </Wrapper>
  );
}
