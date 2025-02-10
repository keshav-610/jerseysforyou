import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NotFound from "./pages/NotFound.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </Router>
  );
};

export default App;
