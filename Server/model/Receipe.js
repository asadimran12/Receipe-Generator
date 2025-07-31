const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  userId: String, 
  ingredients: [String],
  recipe: {
    title: String,
    description: String,
    ingredients: [String],   
    instructions: [String]  
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Recipe', recipeSchema);
