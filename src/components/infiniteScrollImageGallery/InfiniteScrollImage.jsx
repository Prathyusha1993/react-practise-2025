import React, { useEffect, useState } from 'react'

const ACCESS_KEY = '-jFNGzoP0uXmAbeYAqDtkymaVSQgIhS20j7XhKyt4ZQ';

function InfiniteScrollImage() {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchImages = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://api.unsplash.com/photos/random?count=10&client_id=${ACCESS_KEY}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setImages(prevImages => [...prevImages, ...data]);
        }catch(error){
            setError(error.message);
        }finally{
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchImages();
    }, []);

    
    const handleScroll = () => {
        if(window.innerHeight + document.documentElement.scrollTop >= 
            document.documentElement.offsetHeight - 200 && !loading
         ) {
           fetchImages(); 
         }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [loading]);
    
    
  return (
    <div style={{padding: '20px'}}>
        <h3>Infinite Scroll Image Gallery</h3>
        {images.length > 0 && (
            <div style={{display:'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(250px, 1fr))', gap: '10px'}}>
                {images.map((image) => (
                    <img key={image.id} src={image.urls.small} style={{width:'100%', objectFit:'cover', height: 'auto', borderRadius:'8px'}} alt={image.alt_description || 'Unsplash'} loading='lazy' />
                ))}
            </div>
        )}
        {error && <p>{error}</p>}
        {loading && <p>Loading more images...</p>}
    </div>
  )
}

export default InfiniteScrollImage;