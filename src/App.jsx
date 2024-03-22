import "./App.css";
import Nav from "./components/nav";
import Header from "./components/header";
import Products from "./components/products";
import Categoris from "./components/categoris";
function App() {
  return (
  
      <div className="bg-violet-50">
        <Nav />
        <Header />
        <Categoris />
        <Products />

      </div>
    
  );
}

export default App;
