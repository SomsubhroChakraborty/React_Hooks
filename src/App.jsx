import { useEffect, useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(2);
  useEffect(() => {
    alert('Hey welcome to my page');
  }, []); //"[]" means that it should be only called once
  return (
    <>
      <div>The count is {count}</div>
      <button onClick={() => setCount(count ** 2)}>Update count</button>
    </>
  );
}

export default App;
