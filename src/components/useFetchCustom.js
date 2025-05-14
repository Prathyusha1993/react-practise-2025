import { useEffect, useState } from "react";

function useFetchCustom(url) {
    const [data, setData] = useState(null);
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(url);
                if(!response.ok) throw new Error(`Error: ${response.status}`);
                const result = await response.json();
                if(isMounted){
                    setData(result);
                }
            }catch(err){
                if(isMounted){
                    setError(err.message);
                }
            }finally{
                if(isMounted){
                    setLoading(false);
                }
            }
        }
        fetchData();

        return () => {
            isMounted = false;
        }
    }, [url]);  //rerun the effect if url changes.

    return {data, loading, error};
}

export default useFetchCustom;

// how to use it in component:
import React from 'react';
import useFetchCustom from './useFetchCustom';

function ExampleComponent() {
    const {data, loading, error} = useFetchCustom('https://api.example.com/data');
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error fetching data: {error}</p>

    return (
        <div>
            {data && data.map((item) => (
                <div key={item.id}>
                    <p>Title: {item.title}</p>
                    <p>Completed: {item.completed ? 'yes' : 'no' }</p>
                </div>
            ))}
        </div>
    )
}

// export default ExampleComponent;