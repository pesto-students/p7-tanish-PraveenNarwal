import React, { useState }    from 'react'
import { 
  BrowserRouter as Router, 
  Route, 
  Routes }                    from 'react-router-dom';
import Contact                from './contact/contact';
import ShortUrl               from './shortner/shortUrl';
import Header                 from './contact/header';
import './App.css'

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ShortUrl />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
