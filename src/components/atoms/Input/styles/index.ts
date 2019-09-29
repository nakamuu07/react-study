import styled from 'styled-components';

const Input = styled.input`
  background-color: '#ffffff';
  border: 1px solid '#d7d7dc';
  border-radius: 5px;
  box-shadow: 0 0 2.5px '#d7d7dc' inset;
  font-size: '1.4rem';
  height: 32px;
  outline: none;
  padding: 0 5px;
  width: 100%;

  &::placeholder {
    color: '#d7d7dc';
  }
`;

export default Input;
