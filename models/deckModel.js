/////////////////////////////////////////////////////////////
//DEPENDENCIES

//Create const mongoose by requiring dependency mongoose
const mongoose = require('mongoose')

/////////////////////////////////////////////////////////////
//CREATE SCHEMA AND MODEL

//Create const deckSchema using a new mongoose Schema
const deckSchema = new mongoose.Schema({
  name: { type: String, required: true },
  picture: String,
  description: String,
  deckType: { type: String, default: 'Standard' },
  created: { type: Date, default: Date.now },
  updated: { type: Date, Default: Date.now },
  cards: { type: Array, required: true },
  colors: { type: Array, default: []},
  performance: {
    wins: Number,
    losses: Number,
  },
  notes: [String],
  user: String
})

//Create deck model using the deck schema
const Deck = mongoose.model('deck', deckSchema)

//Export the deck model
module.exports = Deck
