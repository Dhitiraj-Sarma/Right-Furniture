import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar";
// import Shop from "./Pages/Shop";
// import Cart from "./Pages/Cart";
// import Wishlist from "./Pages/Wishlist";
import Footer from "./Components/Footer";
import React, { Suspense } from "react";

function App() {
  const Home = React.lazy(() => import("./Pages/Home"));
  const Shop = React.lazy(() => import("./Pages/Shop"));
  const Cart = React.lazy(() => import("./Pages/Cart"));
  const Wishlist = React.lazy(() => import("./Pages/Wishlist"));

  return (
    <Router>
      <div>
        <Navbar />
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
