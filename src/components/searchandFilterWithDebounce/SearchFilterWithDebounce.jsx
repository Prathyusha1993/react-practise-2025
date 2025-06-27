import React, { useEffect, useState } from "react";
import allItems from "./mockApi";

function SearchFilterWithDebounce() {
  const [inputTerm, setInputTerm] = useState("");
  const [debounceTerm, setDebounceTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const fetchMockData = (searchTerm, category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filtered = allItems;
        if (category !== "All") {
          filtered = filtered.filter((item) => item.category === category);
        }
        if (searchTerm) {
          filtered = filtered.filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
        }
        resolve(filtered);
      }, 500);
    });
  };

  useEffect(() => {
    setLoading(true);
    fetchMockData(debounceTerm, selectedCategory).then((data) => {
      setResults(data);
      setLoading(false);
    });
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

      {loading ? (<p>Loading...</p>) : (
        <ul>
          {results.map((item) => (
            <li key={item.id}>{item.name} - {item.price}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchFilterWithDebounce;
