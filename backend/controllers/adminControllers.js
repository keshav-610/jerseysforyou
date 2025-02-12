const cloudinary = require("../config/cloudinary");
const Jersey = require("../model/jerseyModel");

const uploadNewJersey = async (req, res) => {
  const { name, team, type, price, sleeve, stockDetails, description } = req.body;

  if (!name || !team || !type || !price || !sleeve || !stockDetails || !description || !req.files) {
    return res.status(400).json({ message: "Please fill all required fields and upload images." });
  }

  try {
    let uploadedImages = [];

    for (const file of req.files) {
      const result = await cloudinary.uploader.upload(file.path, {
        folder: "jerseys",
      });
      uploadedImages.push(result.secure_url);
    }

    const newJersey = new Jersey({
      name,
      team,
      type,
      price,
      sleeve,
      stockDetails: JSON.parse(stockDetails), // Ensure it's parsed as an array
      images: uploadedImages, // Make sure this matches your schema field
      description,
    });

    await newJersey.save();
    res.status(201).json({ newJersey, message: "Jersey added successfully" });
  } catch (error) {
    console.error("Error saving jersey:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getAllJerseys = async (req, res) => {
  try {
    const jerseys = await Jersey.find();
    res.json(jerseys);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { uploadNewJersey, getAllJerseys };
