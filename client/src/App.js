import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import NewProduct from "./components/NewProduct";
import Product from "./components/Product";
import Header from "./components/Header";
import EditProduct from "./components/EditProduct";
// import EditPet from "./components/EditPet";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/new" element={<NewProduct />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/product/edit/:id" element={<EditProduct />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
