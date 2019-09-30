import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

// interface Item {
//   id: number;
//   name: string;
//   price: number;
//   stock: number;
//   memo: string;
// }

type OutterProps = RouteComponentProps;

type PracticeListProps = OutterProps;

const PracticeList: React.FC<PracticeListProps> = () => {
  // const listItems: Item[] = React.useMemo(
  //   () => [
  //     {
  //       id: 1,
  //       name: 'プロテイン',
  //       price: 150,
  //       stock: 8000,
  //       memo: '今月の目玉商品'
  //     },
  //     {
  //       id: 2,
  //       name: 'サラダチキン',
  //       price: 198,
  //       stock: 100,
  //       memo: ''
  //     },
  //     {
  //       id: 3,
  //       name: 'ダンベル',
  //       price: 398,
  //       stock: 200,
  //       memo: '5kg'
  //     }
  //   ],
  //   []
  // );

  // const headItems = React.useMemo(
  //   () => [
  //     { id: 'id', value: 'ID' },
  //     { id: 'name', value: '商品名' },
  //     { id: 'price', value: '単価' },
  //     { id: 'stock', value: '在庫' },
  //     { id: 'memo', value: '備考' }
  //   ],
  //   []
  // );

  // const bodyItems = React.useMemo(
  //   () =>
  //     listItems.map(({ id, name, price, stock, memo }) => [
  //       { id: 'id', value: id },
  //       { id: 'name', value: name },
  //       { id: 'price', value: price },
  //       { id: 'stock', value: stock },
  //       { id: 'memo', value: memo }
  //     ]),
  //   [listItems]
  // );

  return <div>PracticeList</div>;
};

export default PracticeList;
