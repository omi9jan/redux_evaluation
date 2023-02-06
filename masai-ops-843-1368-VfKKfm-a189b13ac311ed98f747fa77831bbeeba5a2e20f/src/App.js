import "./App.css";
import Navbar from "./Components/Navbar";
import MainRoutes from "./Pages/MainRoutes";
import ProductCard from "./Components/ProductCard";
import ProductPage from "./Pages/ProductPage";

function App() {
  //Do not modify anything in this file
  return (
    <div className="App">
      <Navbar />
      {/* <ProductCard/> */}
      <ProductPage/>
      <MainRoutes />
    </div>
  );
}

export default App;
