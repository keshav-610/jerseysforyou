import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NotFound from "./pages/NotFound.jsx";
import Admin from "./pages/Admin/Admin.jsx";
import Products from "./pages/Admin/Products.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/products" element={<Products/>}/>
      </Routes>
    </Router>
  );
};

export default App;
