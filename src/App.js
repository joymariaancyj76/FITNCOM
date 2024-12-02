import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./Components/AboutUs/AboutUs";
import Signin from "./Components/Signin/Signin";
import ProductsPage from "./Components/Cricket/ProductPage";
import KidsPage from "./Components/Kids/Kids"; // Import KidsPage
import { UserStatusContext } from "./Scripts/AppContainer";
import Cricket from "./Components/Cricket/Cricket";
import LoadingMask from "./Components/Common/LoadingMask";

function App() {
  // eslint-disable-next-line
  const [isLoggedIn, setIsLoggedIn] = useContext(UserStatusContext);

  return (
    <Router>
      <div className={`App`}>
        <Navbar />
        <LoadingMask />
        {isLoggedIn ? (
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
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/cricket" element={<Cricket />} />
            <Route path="/products/kids" element={<KidsPage />} />
            {/* Other protected routes */}
          </Routes>
        ) : (
          <Routes>
            <Route path="/*" element={<Signin />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
