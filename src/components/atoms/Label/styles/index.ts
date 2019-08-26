import styled from 'styled-components';

export interface PProps {
  isCursorPointer: boolean;
}

const P = styled.p<PProps>`
  align-items: center;
  color: #fff;
  cursor: ${({ isCursorPointer }) => (isCursorPointer ? 'pointer' : 'default')};
  display: flex;
  height: 20px;
`;

export default P;
