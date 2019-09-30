import styled from 'styled-components';

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;

  th {
    overflow: hidden;
  }

  th,
  td {
    height: 30px;
  }

  thead {
    font-weight: bold;

    tr {
      &:first-child {
        border-bottom: 2px solid;

        th {
          border-right: 1px solid;

          &.resize {
            border-right: 1px solid;
            position: relative;
            resize: horizontal;
          }

          .item {
            height: inherit;
            padding: 3.5px 10px 10px;

            &.draggable {
              cursor: all-scroll;
            }
          }
        }
      }

      &:not(:first-child) {
        border-bottom: 3px double;

        th {
          padding: 0 10px;
        }
      }
    }
  }

  /* stylelint-disable-next-line no-descending-specificity */
  tbody tr {
    transition: 150ms;

    &:nth-child(even) {
      background-color: #dcdcdc;
    }

    &:hover {
      background-color: #e0ffff;
    }

    td {
      padding: 0 10px;
    }
  }
`;

export default Table;
