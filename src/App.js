import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Footer from './Components/Footer/Footer';
import Categories from './Components/Categories/Categories';
import Signin from './Components/Signin/Signin';
import ProductsPage from './Components/ProductsPage/ProductsPage';
import KidsPage from './Components/Kids/Kids'; // Import KidsPage


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Categories />
                <Footer />
              </>
            }
          />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/kids" element={<KidsPage />} /> 
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
