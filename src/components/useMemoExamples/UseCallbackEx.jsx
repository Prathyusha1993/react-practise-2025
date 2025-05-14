import React, { useCallback, useState } from 'react'

function UseCallbackEx() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log('Button click in child');
        setCount(prevCount => prevCount+1);
    }, [setCount]);

  return (
    <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count+1)}>Increment Parent</button>
        <ChildComponent onClick={handleClick} />
    </div>
  )
}

const ChildComponent = React.memo(({onClick}) => {
    console.log('Child component rendered');
    return <button onClick={onClick}>Click Me(Child)</button>
})

export default UseCallbackEx;