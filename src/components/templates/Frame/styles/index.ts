import styled from 'styled-components';

const Div = styled.div`
  .main {
    height: calc(100% - 50px);
    left: 0px;
    position: absolute;
    top: 50px;
    width: 100%;
  }

  .menu {
    align-items: center;
    background-color: #282c34;
    display: flex;
    height: 50px;
    left: 0px;
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 2;
  }
`;

export default Div;
