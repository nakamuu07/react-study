import * as React from 'react';

const State: React.FC = () => {
  const [count, setCount] = React.useState(0);
  const addCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center'
      }}
    >
      <div style={{ fontSize: '100px' }}>{count}</div>
      <button onClick={addCount} type="button">
        Add
      </button>
    </div>
  );
};

export default State;
