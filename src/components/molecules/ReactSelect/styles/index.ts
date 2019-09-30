import Select from 'react-select';
import styled from 'styled-components';

const ReactSelect = styled<any>(Select)`
  font-size: '1.4rem';
  height: 32px;
  width: 200px;

  &.disabled {
    opacity: 0.5;
  }

  > div {
    &:nth-child(1),
    &:nth-child(2) {
      border-color: '#d7d7dc';
      box-shadow: none;
      height: 100%;
      min-height: 100%;

      &:hover {
        border-color: '#d7d7dc';
      }

      /* stylelint-disable-next-line no-descending-specificity */
      > div {
        &:nth-child(1),
        &:nth-child(2) {
          border-radius: 4px;
          height: inherit;
        }

        &:nth-child(2) {
          > span {
            opacity: 0;
          }

          > div {
            color: '#606060';

            > svg {
              height: 15px;
              width: 15px;
            }
          }
        }

        &:nth-child(1) > div {
          position: absolute;

          &:nth-child(1) {
            color: inherit;
          }
        }
      }
    }
  }
`;

export default ReactSelect as any;
