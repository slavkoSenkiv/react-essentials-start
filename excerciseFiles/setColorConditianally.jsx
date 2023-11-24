import React from 'react';

export default function App() {
  const [styled, setStyle] = React.useState('');

  return (
    <div>
      <p className={styled}>Style me!</p>
      <button onClick={handleClick}>Toggle style</button>
    </div>
  );
}
