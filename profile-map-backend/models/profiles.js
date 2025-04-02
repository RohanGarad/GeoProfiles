const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  photo: { type: String },
  email: {type: String},
  description: { type: String },
  interest: {type: String},
  qualification: {type: String},
  address: { type: String },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
});

module.exports = mongoose.model("Profile", ProfileSchema);