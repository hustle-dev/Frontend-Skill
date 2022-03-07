export interface WrapperProps {
  $size: string | number;
  checked: boolean;
  $loading: string;
}

export interface CheckerProps {
  label: string;
  checked: boolean;
  loading: boolean;
  size: string | number;
  onChange: () => void;
}
