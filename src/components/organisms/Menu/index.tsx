import * as React from 'react';
import LabelBlock, { LablelPlops } from '../../molecules/LabelBlock';

const Menu: React.FC = () => {
  const labels: LablelPlops['labels'] = [
    { label: 'Top', path: '/top' },
    { label: 'Props', path: '/props' },
    { label: 'State', path: '/state' }
  ];

  return <LabelBlock labels={labels} />;
};

export default Menu;
