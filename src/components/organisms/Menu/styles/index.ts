import styled from 'styled-components';

const Ul = styled.ul`
  background: rgb(29, 33, 19);
  display: flex;
  height: 50px;
  margin: 0 auto;
  max-width: 1000px;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  position: relative;
  width: 100%;

  > li {
    float: left;
    height: 50px;
    line-height: 50px;
    padding-left: 20px;
    position: relative;
    width: inherit;

    .nav-link {
      color: #fff;
      display: block;
      position: relative;
      text-decoration: none;
    }

    > p::after {
      content: '';
      border-right: 1px solid #fff;
      border-bottom: 1px solid #fff;
      display: block;
      height: 6px;
      margin-left: 15px;
      transform: rotate(45deg);
      width: 6px;
    }

    .sub-menu {
      left: 0px;
      opacity: 0;
      padding: 0;
      position: absolute;
      top: 40px;
      transition: 250ms;
      visibility: hidden;
      width: 100%;
      z-index: 2;

      > li {
        background: #072a24;
        list-style: none;
        padding-left: 20px;

        .nav-link {
          display: block;
        }

        &:hover {
          background: #125a64;
        }
      }
    }

    &:hover > .sub-menu {
      height: 100%;
      opacity: 1;
      top: 50px;
      visibility: unset;
    }
  }
`;

export default Ul;
