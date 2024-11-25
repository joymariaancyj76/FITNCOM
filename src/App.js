import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./Components/AboutUs/AboutUs";
import Signin from "./Components/Signin/Signin";
import ProductsPage from "./Components/ProductsPage/ProductsPage";
import KidsPage from "./Components/Kids/Kids"; // Import KidsPage
import { UserStatusContext } from "./Scripts/AppContainer";
import Cricket from "./Components/ProductsPage/Cricket";
import MyOrders from "./Components/MyOrders/MyOrders";

function App() {
  const [isLoggedIn] = useContext(UserStatusContext);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Common Routes */}
          <Route path="/" element={
            <>
              <Hero />
              <AboutUs />
              <Footer />
            </>
          } />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cricket" element={<Cricket />} />
          <Route path="/products/kids" element={<KidsPage />} />

          {/* Protected Routes */}
          <Route
            path="/myorders"
            element={isLoggedIn ? <MyOrders /> : <Navigate to="/signin" />}
          />
          
          {/* Signin Route */}
          <Route
            path="/signin"
            element={isLoggedIn ? <Navigate to="/products" /> : <Signin />}
          />
          
          {/* Catch-all route for other paths */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
