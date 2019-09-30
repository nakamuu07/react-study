import styled from 'styled-components';
import StyledButton from '../../../atoms/Button';

const Button = styled(StyledButton)`
  background-color: #3bd3bc;
  height: 32px;
  width: 100px;

  .react-svg > div {
    align-items: center;
    display: flex;
    justify-content: center;

    .icon {
      height: 20px;

      circle,
      line {
        fill: #3bd3bc !important;
        stroke: #ffffff !important;
      }
    }
  }
`;

export default Button;
