const mongoose = require("mongoose");

const rollSchema = new mongoose.Schema({
  win: {
    type: Boolean,
    required: true,
  },
  sub: {
    type: String,
  },
  date: {
    type: Date,
  },
  Location: {
    type: String,
  },
  Opponent: {
    type: String,
  }
}, { timestamps: true });

const Roll = mongoose.model("Roll", rollSchema, "data");
