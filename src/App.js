import React, { useEffect, useState } from 'react';
import Component from './Components/Component';

const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Component num={count} />
      <button onClick={() => increment()}>Click me</button>
    </>
  );
};

export default App;
