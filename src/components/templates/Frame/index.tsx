import * as React from 'react';
import Div from './styles';
import Menu from '../../organisms/Menu';

interface FrameProps {
  children: React.ReactNode;
}

const Frame: React.FC<FrameProps> = ({ children }: FrameProps) => {
  return (
    <Div>
      <div className="menu">
        <Menu />
      </div>
      <main className="main">{children}</main>
    </Div>
  );
};

export default Frame;
