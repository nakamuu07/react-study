import * as React from 'react';
import { Link } from 'react-router-dom';
import LabelComponent from '../../atoms/Label';
import Ul from './styles';

interface Label {
  label: string;
  path: string;
}

export interface LablelPlops {
  labels: Label[];
}

const LabelBlock: React.FC<LablelPlops> = ({ labels }: LablelPlops) => {
  const items = labels.map(({ label, path }) => (
    <li key={label}>
      <LabelComponent isCursorPointer={true}>
        <Link to={path} style={{ color: '#fff' }}>
          {label}
        </Link>
      </LabelComponent>
    </li>
  ));

  return items.length ? <Ul>{items}</Ul> : null;
};

export default LabelBlock;
