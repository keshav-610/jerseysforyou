import { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
  const [jerseys, setJerseys] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJerseys = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/getAllJerseys");
        setJerseys(response.data);
      } catch (error) {
        console.error("Error fetching jerseys:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJerseys();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Jersey Collection</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-1/4">
          {jerseys.map((jersey) => (
            <div key={jersey._id} className="border rounded-lg p-4 shadow-md">
              <img
                src={jersey.images.length > 0 ? jersey.images[0] : "/placeholder.jpg"}
                alt={jersey.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h2 className="text-lg font-semibold mt-2">{jersey.name}</h2>
              <p className="text-gray-600 font-medium">${jersey.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
