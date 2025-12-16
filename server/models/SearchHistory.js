const mongoose = require("mongoose");

const searchHistorySchema = new mongoose.Schema(
  {
    city: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SearchHistory", searchHistorySchema);
