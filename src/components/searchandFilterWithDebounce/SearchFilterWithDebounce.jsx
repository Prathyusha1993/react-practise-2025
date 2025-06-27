import React, { useEffect, useState } from "react";
import allItems from "./mockApi";

function SearchFilterWithDebounce() {
  const [inputTerm, setInputTerm] = useState("");
  const [debounceTerm, setDebounceTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchMockData = (searchTerm, category, page=1, limit=10) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let filtered = allItems;
        if (category !== "All") {
          filtered = filtered.filter((item) => item.category === category);
        }
        if (searchTerm) {
          filtered = filtered.filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
        }
        const startIndex = (page-1)*limit;
        const paginated = filtered.slice(startIndex, startIndex + limit);
        resolve({
          data: paginated,
          hasMore: startIndex + limit < filtered.length});
      }, 500);
    });
  };

  useEffect(() => {
    setLoading(true);
    fetchMockData(debounceTerm, selectedCategory, page).then(({data, hasMore}) => {
      setResults(prev => page === 1 ? data : [...prev, ...data]);
      setHasMore(hasMore);
      setLoading(false);
    });
  }, [debounceTerm, selectedCategory,page]);

  useEffect(() => {
    setPage(1);
  }, [debounceTerm, selectedCategory]);

  useEffect(() => {
    const uniqueCategories = [
      "All",
      ...new Set(allItems.map((item) => item.category)),
    ];
    setCategories(uniqueCategories);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceTerm(inputTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [inputTerm]);

  const handleScroll = () => {
    if(window.innerHeight + document.documentElement.scrollTop >= 
      document.documentElement.offsetHeight - 200 && 
      hasMore && !loading
    ){
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasMore, loading]);

  // useEffect(() => {
  //   if (debounceTerm) {
  //     console.log("Searching for:", debounceTerm);
  //     // Here you would typically call your search API or filter logic
  //   }
  // }, [debounceTerm]);

  return (
    <div>
      <h3>Search and Filter With Debounce</h3>
      <input
        type="text"
        value={inputTerm}
        onChange={(e) => setInputTerm(e.target.value)}
        placeholder="Search..."
      />
      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        {categories.map((categ) => (
          <option key={categ} value={categ}>{categ}</option>
        ))}
      </select>
      
        <ul>
          {results.map((item) => (
            <li key={item.id}>{item.name} - {item.price}</li>
          ))}
        </ul>
      {loading && <p>Loading...</p>}
    </div>
  );
}

export default SearchFilterWithDebounce;
