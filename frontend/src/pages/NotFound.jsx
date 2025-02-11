import { Link } from "react-router-dom";
import Home from "./Home.jsx"
const NotFound = () => {
  return (
    <div className="bg-gradient-to-br from-black to-gray-900 min-h-screen flex items-center justify-center">
      <div className="text-center">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-red-500 font-bold font-sf">404</h1>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text:4xl font-sf font-medium text-white">Sorry, we can't find that page. You'll find lots to explore on the home page.</h3>
          <div className="mt-5">
          <Link to="/" element={<Home/>} className="font-sf text-black font-medium text-lg px-5 py-2 rounded bg-white">Back to Homepage</Link>
          </div>
      </div>
    </div>
  );
};

export default NotFound;
