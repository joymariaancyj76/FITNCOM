import React, { useContext, Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { UserStatusContext } from "./Scripts/AppContainer";

// Lazy loaded components for better performance
const Hero = lazy(() => import("./Components/Hero/Hero"));
const AboutUs = lazy(() => import("./Components/AboutUs/AboutUs"));
const Signin = lazy(() => import("./Components/Signin/Signin"));
const ProductsPage = lazy(() => import("./Components/Cricket/ProductPage"));
const Cricket = lazy(() => import("./Components/Cricket/Cricket"));
const KidsPage = lazy(() => import("./Components/Kids/Kids"));
const MyOrders = lazy(() => import("./Components/MyOrders/MyOrders"));
const HowToChooseSport = lazy(() => import("./Components/HowToChoose/HowToChoose"));
const NotFound = lazy(() => import("./Components/NotFound/NotFound"));

function App() {
  const [isLoggedIn] = useContext(UserStatusContext);

  // Preload critical routes like Signin for smoother transitions
  useEffect(() => {
    import("./Components/Signin/Signin");
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />

        <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
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

            {/* Sign-in Route with dedicated Suspense */}
            <Route
              path="/signin"
              element={
                <Suspense fallback={<div className="loading-spinner">Loading Sign In...</div>}>
                  <Signin />
                </Suspense>
              }
            />

            {/* Protected Routes */}
            <Route
              path="/myorders"
              element={
                isLoggedIn ? (
                  <Suspense fallback={<div className="loading-spinner">Loading Orders...</div>}>
                    <MyOrders />
                  </Suspense>
                ) : (
                  <Navigate to="/signin" />
                )
              }
            />

            {/* 404 Not Found Route */}
            <Route
              path="*"
              element={
                <Suspense fallback={<div className="loading-spinner">Page Not Found...</div>}>
                  <NotFound />
                </Suspense>
              }
            />
          </Routes>
        </Suspense>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
