import styled from 'styled-components';

const Button = styled.button`
  background-color: #3bd3bc;
  border-radius: 5px;
  color: #f4f4f6;
  height: 32px;
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  outline: none;
  transition: 150ms;
  width: 100%;

  &:disabled {
    opacity: 0.5;
  }
`;

export default Button;
