import styled from 'styled-components';

const P = styled.p`
  position: relative;
  width: 190px;

  &::before,
  &::after {
    content: '';
    display: block;
    left: 0;
    position: absolute;
    top: 50%;
  }

  &::before {
    border: 1px solid #606060;
    border-radius: 6.5px;
    height: 13px;
    margin-left: 8px;
    margin-top: -8px;
    width: 13px;
  }

  &::after {
    background-color: #606060;
    height: 8px;
    margin-left: 21px;
    margin-top: 2px;
    transform: rotate(-45deg);
    width: 1px;
  }

  .search-input {
    padding-left: 30px;
  }

  &.right {
    &::before,
    &::after {
      left: auto;
      right: 12px;
    }

    .search-input {
      padding-left: 5px;
      padding-right: 30px;
    }
  }
`;

export default P;
