import * as React from 'react';
import P from './styles';

interface LabelProps {
  children: React.ReactNode;
  isCursorPointer: boolean;
}

const Label: React.FC<LabelProps> = ({
  children,
  isCursorPointer
}: LabelProps) => <P isCursorPointer={isCursorPointer}>{children}</P>;

export default Label;
