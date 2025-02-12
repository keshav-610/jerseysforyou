import { useState } from "react";
import axios from "axios";

const Admin = () => {
  const [formData, setFormData] = useState({
    name: "",
    team: "",
    type: "Home",
    price: "",
    sleeve: "Half",
    stockDetails: [{ size: "S", numberOfStocks: 0 }],
    description: "",
  });
  const [images, setImages] = useState([]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleStockChange = (index, field, value) => {
    const updatedStock = [...formData.stockDetails];
    updatedStock[index][field] = value;
    setFormData({ ...formData, stockDetails: updatedStock });
  };

  const handleFileChange = (e) => {
    setImages([...e.target.files]);
  };

  const addStockDetail = () => {
    setFormData({
      ...formData,
      stockDetails: [...formData.stockDetails, { size: "S", numberOfStocks: 0 }],
    });
  };

  const removeStockDetail = (index) => {
    const updatedStock = formData.stockDetails.filter((_, i) => i !== index);
    setFormData({ ...formData, stockDetails: updatedStock });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = new FormData();
    data.append("name", formData.name);
    data.append("team", formData.team);
    data.append("type", formData.type);
    data.append("price", formData.price);
    data.append("sleeve", formData.sleeve);
    data.append("description", formData.description);
    data.append("stockDetails", JSON.stringify(formData.stockDetails));

    images.forEach((image) => {
      data.append("images", image);
    });

    try {
      const response = await axios.post("http://localhost:5000/api/newJersey", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Jersey uploaded successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error uploading jersey:", error);
      alert("Upload failed!");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Upload Jersey</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Jersey Name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        />

        {/* Team */}
        <input
          type="text"
          name="team"
          placeholder="Team Name"
          value={formData.team}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        />

        {/* Type Selection */}
        <select name="type" value={formData.type} onChange={handleInputChange} className="w-full p-2 border rounded">
          <option value="Home">Home</option>
          <option value="Away">Away</option>
        </select>

        {/* Sleeve Selection */}
        <select name="sleeve" value={formData.sleeve} onChange={handleInputChange} className="w-full p-2 border rounded">
          <option value="Half">Half Sleeve</option>
          <option value="Full">Full Sleeve</option>
        </select>

        {/* Price */}
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        />

        {/* Description */}
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleInputChange}
          className="w-full p-2 border rounded"
          required
        ></textarea>

        {/* Stock Details */}
        <div>
          <h3 className="text-lg font-semibold">Stock Details</h3>
          {formData.stockDetails.map((stock, index) => (
            <div key={index} className="flex space-x-2 mt-2">
              <select
                value={stock.size}
                onChange={(e) => handleStockChange(index, "size", e.target.value)}
                className="p-2 border rounded"
              >
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
              <input
                type="number"
                placeholder="Stock"
                value={stock.numberOfStocks}
                onChange={(e) => handleStockChange(index, "numberOfStocks", e.target.value)}
                className="p-2 border rounded"
              />
              {index > 0 && (
                <button type="button" onClick={() => removeStockDetail(index)} className="bg-red-500 text-white px-2 rounded">
                  X
                </button>
              )}
            </div>
          ))}
          <button type="button" onClick={addStockDetail} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
            + Add Size
          </button>
        </div>

        {/* Image Upload */}
        <input type="file" multiple accept="image/*" onChange={handleFileChange} className="w-full p-2 border rounded" required />

        {/* Submit Button */}
        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded font-semibold">
          Upload Jersey
        </button>
      </form>
    </div>
  );
};

export default Admin;
