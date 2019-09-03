import * as React from 'react';
import uniqid from 'uniqid';
import StyledTable from './styles';

interface Item {
  id: string;
  value: React.ReactNode;
}

export interface TableProps {
  bodyItems: Item[][];
  headItems: Item[];
}

const Table: React.FC<TableProps> = ({ bodyItems, headItems }: TableProps) => {
  const theadThs = React.useMemo(
    () =>
      headItems.map(({ id, value }) => (
        <th key={uniqid()}>
          <div>{value}</div>
        </th>
      )),
    [headItems]
  );
  const tbodyTrs = React.useMemo(
    () =>
      bodyItems.map(bodyItem => {
        const tbodyTds = headItems.map(({ id: headId }) => {
          const tbodyTd = bodyItem.find(({ id: bodyId }) => headId === bodyId);

          return tbodyTd ? <td key={uniqid()}>{tbodyTd.value}</td> : null;
        });

        return <tr key={uniqid()}>{tbodyTds}</tr>;
      }),
    [bodyItems, headItems]
  );

  return (
    <StyledTable>
      <thead>
        <tr>{theadThs}</tr>
      </thead>
      <tbody>{tbodyTrs}</tbody>
    </StyledTable>
  );
};

export default Table;
