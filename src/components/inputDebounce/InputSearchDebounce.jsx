import React, { useEffect, useRef, useState } from 'react'

function InputSearchDebounce() {
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [suggestions, setSuggestions] = useState([]);
    const [activeIndex, setActiveIndex] = useState(-1);
    const cache = useRef({});


    useEffect(() => {
        const debounceSearch = setTimeout(() => {
            if(inputValue.trim().length < 2){
                setSuggestions([]);
                return;
            }
            if(cache.current[inputValue]){
                setSuggestions(cache.current[inputValue]);
                return;
            }
            setLoading(true);
            setError(null);

            fetch('https://api.example.com/search?q=' + inputValue)
            .then(res => res.json())
            .then(data => {
                setSuggestions(data)
                cache.current[inputValue] = data;
        })
        .catch((err) =>{
            setError(err.message);
        })
        .finally(() => {
            setLoading(false);
        })

        return () => clearTimeout(debounceSearch);
        }, 500)
    }, [inputValue]);

    const handleKeyDown = (e) => {
        if(e.key === 'ArrowDown'){
            setActiveIndex(prev => Math.min(prev + 1, suggestions.length - 1));
        } else if(e.key === 'ArrowUp'){
            setActiveIndex(prev => Math.max(prev-1, 0));
        } else if(e.key === 'Enter' && activeIndex !== -1){
            setInputValue(suggestions[activeIndex].word);
            setSuggestions([]);
            setActiveIndex(-1);
        }
    };

  return (
    <div>
        <form>
            <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Search....' onKeyDown={handleKeyDown}/>
            {loading && <div>Loading....</div>}
            {error && <div>{error}</div>}
            
            {!loading && inputValue && suggestions.length === 0 && (<div>No Suggestions Found.</div>)}
            {suggestions.length > 0 && (
                <ul>
                    {suggestions.map((suggest) => (
                        <li onClick={() => {setInputValue(suggest.word); setSuggestions([])}}>{suggest.word}</li>
                    ))}
                </ul>
            )}
        </form>
    </div>
  )
}

export default InputSearchDebounce