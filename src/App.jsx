import "./App.css";
import Nav from "./components/nav";
import Footer from "./components/footer";
import Home from "./pages/home";
import ProductDetails from "./pages/product-details";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="bg-violet-50">
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
