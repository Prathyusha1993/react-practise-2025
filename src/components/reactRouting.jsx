import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';
// react routing is used to handle client side routing in react applications, it allows to navigate between diferent compnenrs without full page reload.

function Home(){
    return <h2>Home</h2>
}

function About(){
    return <h2>About</h2>
}

function Contact(){
    return <h2>Contact</h2>
}

// dynamic route ex:
function UserProfile(){
    const {id} = useParams();
    return <h2>User Id: {id}</h2>
}

// route gauard exampple:
function ProtectedRoute({ isAuthenticated, children}) {
    if(!isAuthenticated) {
        return <Navigate to='/login' />
    }
    return children;
}


function reactRouting() {
  return (
    <Router>
        <nav>
            <Link to='/'>Home</Link> | <Link to='/about'>About</Link>
        </nav>
        <Routes>
            <Route path='/user/:id' element={<UserProfile />} />   // dynamic route ex:
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/dashboard' element={
                <ProtectedRoute isAuthenticated={userLoggedIn}>
                    <Dashboard />
                </ProtectedRoute>} />
        </Routes>
    </Router>
  )
}

export default reactRouting;