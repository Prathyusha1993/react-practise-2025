import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ITEMS_PER_PAGE = 10; // Number of items to fetch per page

const InfiniteScrollApiFetch = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.example.com/items?page=${page}&limit=${ITEMS_PER_PAGE}`
      );
      const newItems = response.data;

      if (newItems.length === 0) {
        setHasMore(false);
      } else {
        setItems((prevItems) => [...prevItems, ...newItems]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setHasMore(false)
    } finally {
      setLoading(false);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 200 &&
      hasMore &&
      !loading
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMore, loading]);

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
      {loading && <div>Loading...</div>}
      {!hasMore && <div>No more items to load.</div>}
    </div>
  );
};

export default InfiniteScrollApiFetch;