import React, { useContext, Suspense, lazy, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./Components/AboutUs/AboutUs";
import Signin from "./Components/Signin/Signin";
import { UserStatusContext } from "./Scripts/AppContainer";
import LoadingMask from "./Components/Common/LoadingMask";
import CricketProduct from "./Components/CricketProduct/CricketProduct";
import HowToChooseSport from "./Components/CricketProduct/CricketProduct";
import OrderPage from "./Components/OrderPage/OrderPage";
import NotFound from "./Components/NotFound/NotFound";
import CricketDetail from "./Components/CricketDetail/CricketDetail";

function App() {
  // eslint-disable-next-line
  const [isLoggedIn, setIsLoggedIn] = useContext(UserStatusContext);

  return (
    <Router>
      <div className={`App`}>
        <Navbar />
        <LoadingMask />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <AboutUs />
                <Footer />
              </>
            }
          />
          {/* Products and Related Routes */}
          <Route path="/cricket" element={<CricketProduct />} />
          <Route path="/how-to-choose-sport" element={<HowToChooseSport />} />
          <Route path="/products/:productId" element={<CricketDetail />} />
          {isLoggedIn ? (
            <Route path="/myorders" element={<OrderPage />} />
          ) : (
            <Route path="/*" element={<Signin />} />
          )}
          {/* Sign-in Route with dedicated Suspense */}
          <Route
            path="/signin"
            element={
              <Suspense
                fallback={
                  <div className="loading-spinner">Loading Sign In...</div>
                }
              >
                <Signin />
              </Suspense>
            }
          />

          {/* 404 Not Found Route */}
          <Route
            path="*"
            element={
              <Suspense
                fallback={
                  <div className="loading-spinner">Page Not Found...</div>
                }
              >
                <NotFound />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
