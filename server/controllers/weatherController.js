const axios = require("axios");
const SearchHistory = require("../models/SearchHistory");
const generateAdvisory = require("../utils/advisoryLogic");

exports.getWeather = async (req, res) => {
  try {
    const city = req.params.city.toLowerCase();
    const apiKey = process.env.OPENWEATHER_API_KEY;

    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    const response = await axios.get(url);

    // 🔹 Save search history
    await SearchHistory.create({ city });

    // 🔹 Keep only last 5 searches
    const count = await SearchHistory.countDocuments();
    if (count > 5) {
      const old = await SearchHistory.find().sort({ createdAt: 1 }).limit(count - 5);
      const ids = old.map((item) => item._id);
      await SearchHistory.deleteMany({ _id: { $in: ids } });
    }

    // 🔹 Generate advisory
    const advisories = generateAdvisory(response.data);

    res.status(200).json({
      success: true,
      city,
      weather: response.data,
      advisories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
