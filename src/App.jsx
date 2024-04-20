import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/login";
// import Home from "./component/Home";
import AddProduct from "./component/AddProduct";
import GetProducts from "./component/GetProducts";
import GetProduct from "./component/GetProduct";
import SignUp from "./component/signUp";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/add/product" element={<AddProduct />} />
          <Route path="/get/products" element={<GetProducts />} />
          <Route path="/get/product/:id" element={<GetProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
