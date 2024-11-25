import React, { useContext, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { UserStatusContext } from "./Scripts/AppContainer";

// Lazy loaded components for better performance
const Hero = lazy(() => import("./Components/Hero/Hero"));
const AboutUs = lazy(() => import("./Components/AboutUs/AboutUs"));
const Signin = lazy(() => import("./Components/Signin/Signin"));
const ProductsPage = lazy(() => import("./Components/ProductsPage/ProductPage"));
const Cricket = lazy(() => import("./Components/ProductsPage/Cricket"));
const KidsPage = lazy(() => import("./Components/Kids/Kids"));
const MyOrders = lazy(() => import("./Components/MyOrders/MyOrders"));
const HowToChooseSport = lazy(() => import("./Components/HowToChoose/HowToChoose"));
const NotFound = lazy(() => import("./Components/NotFound/NotFound"));

function App() {
  const [isLoggedIn] = useContext(UserStatusContext);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Home Route */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <AboutUs />
                </>
              }
            />

            {/* Products and Related Routes */}
            <Route path="/cricket" element={<Cricket />} />
            <Route path="/products/kids" element={<KidsPage />} />
            <Route path="/how-to-choose-sport" element={<HowToChooseSport />} />
            <Route path="/products/:productId" element={<ProductsPage />} />

            {/* Protected Routes */}
            <Route
              path="/myorders"
              element={isLoggedIn ? <MyOrders /> : <Navigate to="/signin" />}
            />

            {/* Sign-in Route */}
            <Route
              path="/signin"
              element={isLoggedIn ? <Navigate to="/" /> : <Signin />}
            />

            {/* 404 Not Found Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
