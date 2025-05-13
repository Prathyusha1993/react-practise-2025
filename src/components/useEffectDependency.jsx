import React,{useEffect, useState} from 'react'

function useEffectDependency() {
    const [count, setCount] = useState(0);
    const [data, setData]  =  useState([]);

    useEffect(() => {
        console.log('componenet mounted');
      
      }, []);
      
      
      useEffect(() => {
          console.log(`count updated: ${count}`);
      }, [count]);

      useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => setData(data));
      }, [])

      useEffect(() => {
        const handleScroll = () => console.log(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, [])
      
  return (
    <div>{count}</div>
  )
}

export default useEffectDependency