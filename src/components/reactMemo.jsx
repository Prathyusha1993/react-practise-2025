import React, {useState} from 'react';

// Without React.memo, Greeting would re-render every time reactMemo component re-renders.
// react.memo is a higher order componnet used in functional componnets, to prevent rerendring of the app if props haven't changed.
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