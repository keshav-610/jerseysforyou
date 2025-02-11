import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-black to-gray-900 min-h-screen text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Jerseys for You</h1>
      <p className="text-lg text-gray-400 mb-4">Find the best jerseys at unbeatable prices!</p>
      
      <div className="flex gap-4">
        <Link to="/login">
          <button className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-700 transition">
            Login
          </button>
        </Link>
        <Link to="/shop">
          <button className="bg-green-600 px-6 py-2 rounded hover:bg-green-700 transition">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
