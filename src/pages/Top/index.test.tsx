import React from 'react';
import ReactDOM from 'react-dom';
import Top from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Top />, div);
  ReactDOM.unmountComponentAtNode(div);
});
