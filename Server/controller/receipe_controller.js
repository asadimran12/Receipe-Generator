const axios = require("axios");
const Recipe = require("../model/Receipe");

const generateRecepie = async (req, res) => {
  const { ingredients } = req.body;

  if (!ingredients || !Array.isArray(ingredients) || ingredients.length === 0) {
    return res.status(400).json({ error: "Ingredients are required." });
  }

  try {
    const response = await axios.post(process.env.N8N_AI_WEBHOOK, {
      ingredients,
    });

    console.log("Raw n8n response:", JSON.stringify(response.data, null, 2));
    const content = response.data?.choices?.[0]?.message?.content;

    if (!content) {
      return res.status(500).json({ error: "Invalid response from n8n webhook" });
    }

    let parsedRecipe;
    try {
      parsedRecipe = JSON.parse(content);
    } catch (parseError) {
      console.error("❌ Failed to parse content as JSON:", parseError.message);
      return res.status(500).json({ error: "AI response was not valid JSON." });
    }

    const newRecipe = new Recipe({
      ingredients,
      recipe: {
        title: parsedRecipe.title,
        description: parsedRecipe.description,
        ingredients: parsedRecipe.ingredients,
        instructions: parsedRecipe.instructions,
      },
    });

    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    console.error("Error generating recipe:", error.message);
    res.status(500).json({ error: error.message });
  }
};

module.exports = generateRecepie;
