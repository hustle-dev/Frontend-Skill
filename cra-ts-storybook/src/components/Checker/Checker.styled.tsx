import styled from 'styled-components';
import { theme } from 'styles/theme';
import { WrapperProps } from './Checker.types';

const { colors } = theme;

export const Wrapper = styled.span<WrapperProps>`
  position: relative;
  display: inline-block;
  background: ${colors.white};

  :focus-within {
    outline: 3px solid ${colors.accent['200']};
    border-radius: 6px;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
  }

  & input {
    cursor: pointer;
    opacity: 0;
    position: relative;
    z-index: 10;
    margin: 0;
    width: inherit;
    height: inherit;
  }
`;
