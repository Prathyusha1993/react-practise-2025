import React, { useState } from 'react';

function Home(){
    return (
        <div>
            <h3>Home</h3>
            <p>Welcome to home page.</p>
        </div>
    )
}

function About() {
    return (
        <div>
            <h3>About</h3>
            <p>Welcome to about page.</p>
        </div>
    )
}

function Contact() {
    return(
        <div>
            <h3>Contact</h3>
            <p>Welcome to contact page.</p>
        </div>
    )
}

function TabsEx() {
    const[activeTabs, setActiveTabs] = useState('home');

    const handleTabClick = (tab) => {
        setActiveTabs(tab);
    };

    const renderTabContent = () => {
        switch(activeTabs){
            case 'home':
                return <Home />;
            case 'about':
                return <About />;
            case 'contact':
                return <Contact />;
            default:
                return null;
        }
    };

  return (
    <div>
        <div>
            <button style={{fontWeight: activeTabs === 'home' ? 'bold' : 'normal'}} onClick={() => handleTabClick('home')}>Home</button>
            <button style={{fontWeight: activeTabs === 'about' ? 'bold' : 'normal'}} onClick={() => handleTabClick('about')}>About</button>
            <button style={{fontWeight: activeTabs === 'contact' ? 'bold' : 'normal'}} onClick={() => handleTabClick('contact')}>Contact</button>
        </div>
        <div>
            {renderTabContent()}
        </div>
    </div>
  )
}

export default TabsEx;