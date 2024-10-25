const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  pos: Number,
  team: String,
  matches: Number,
  won: Number,
  lost: Number,
  noResult: Number,
  netRunRate: Number,
  points: Number,
  recentForm: [String]
});

const seasonSchema = new mongoose.Schema({
  year: { type: Number, required: true, unique: true },
  teams: [teamSchema]
});

module.exports = mongoose.model('Season', seasonSchema);
