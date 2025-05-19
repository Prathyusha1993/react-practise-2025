import React, { useEffect, useState, useCallback } from 'react'

function InfiniteScrollPagination() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async () => {
        if(loading || !hasMore) return;

        setLoading(true);
        try{
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
                params: {
                    _limit: 10,
                    _page: page
                }
            });
            if(!response.ok) throw new Error(`Error fetching data: ${response.statusText}`);
            const data = await response.json();
            setItems(prev => [...prev, ...data]);
            setHasMore(response.data.length > 0);
            setPage(prev => prev + 1);
        }catch(err) {
            console.log(err);
        }finally {
            setLoading(false);
        }
    }, [page, loading, hasMore]); 

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
            if(nearBottom && !loading && hasMore) {
                fetchData();
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [fetchData, loading, hasMore]);

  return (
    <div>
        <h2>Infinite Scroll Pagination</h2>
        <ul>
            {items.map(item => (
                <li key={item.id}>{item.id}. {item.title}</li>
            ))}
        </ul>
        {loading && <p>Loading more...</p>}
        {!hasMore && <p>No more data to load.</p>}
    </div>
  )
}

export default InfiniteScrollPagination;