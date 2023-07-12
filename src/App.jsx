import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home, Category, Wishlist, Message, Search } from './pages';
import Header from './components/Header';
import Navigation from './components/Navigation';

const App = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('./public/db.json')
         const data = await response.json();
         console.log(data)
         setData(data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);
  
  return (
     <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Home  product={data} /> }/>
            <Route path='/category' element={<Category /> }/>
            <Route path='/wishlist' element={<Wishlist /> }/>
            <Route path='/message' element={<Message /> }/>
            <Route path='/search' element={<Search product={data}/> }/>
          </Routes>
        <Navigation />
      </BrowserRouter> 
    
  );
};

export default App;
