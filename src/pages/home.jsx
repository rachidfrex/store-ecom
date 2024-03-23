import Header from "../components/header";
import Products from "../components/products";
import Categoris from "../components/categoris";
function Home() {
  return (
    <div className="bg-violet-50">

      <Header />
      <Categoris />
      <Products />

    </div>
  );
}

export default Home;
