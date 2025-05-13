import React, { useCallback, useState } from 'react';

const Button = React.memo(({onClick, label}) => {
    console.log('button rendered');
    return <button onClick={onClick}>{label}</button>
})

function useMemoAnduseCallback() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log('clicked')
    }, []);

  return (
    <div>
        <Button onClick={handleClick} label='click me'></Button>
        <button onClick={() => setCount(count+1)}>Inc</button>
    </div>
  )
}

export default useMemoAnduseCallback;




// useMemo: memoizes the result of function to aviod expensive recalculations
// use callbacks: memoizes the function itself to avoid function re-creation, useful when passing callback to child components.