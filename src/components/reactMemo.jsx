import React, {useState} from 'react';

// Without React.memo, Greeting would re-render every time reactMemo re-renders.
const Greeting = React.memo(({name}) => {
    console.log('rendered:', name);
    return <p> Hello {name}</p>;
});

function reactMemo() {
    const [count, setCount] = useState(0);
  return (
    <div>
        <Greeting name='Pinky' />
        <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
}

export default reactMemo;