"use client";

import React, { useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";

export default function Home() {
  const [ingredients, setIngredients] = useState("");
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    const ingredientList = ingredients
      .split(",")
      .map((i) => i.trim())
      .filter((i) => i); // removes empty values

    if (ingredientList.length === 0) {
      alert("Please enter at least one ingredient.");
      return;
    }

    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/recipe/generate", {
        ingredients: ingredientList,
      });

      if (res.data && res.data.recipe) {
        setRecipe(res.data.recipe);
      } else {
        alert("No recipe found in the response.");
      }
    } catch (err) {
      console.error("❌ Error generating recipe:", err.message);
      alert("Something went wrong! Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-yellow-50 to-blue-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex flex-col items-center justify-start px-6 py-12 w-full">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 text-center mb-6">
          🍳 AI-Powered Recipe Generator
        </h1>
        <p className="text-lg text-gray-600 text-center max-w-xl mb-8">
          Enter ingredients you have, and let our AI chef cook up a recipe!
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-xl">
          <input
            type="text"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="e.g., egg, spinach, cheese"
            className="border border-gray-300 rounded-md px-4 py-2 w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200 w-full sm:w-auto disabled:opacity-50"
          >
            {loading ? "Generating..." : "Generate Recipe"}
          </button>
        </div>

        {recipe && (
          <div className="bg-white shadow-xl rounded-lg mt-10 p-8 max-w-2xl w-full border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800">{recipe.title}</h2>
            <p className="text-gray-600 mt-2">{recipe.description}</p>

            <h3 className="text-xl font-bold mt-6 mb-2">🧂 Ingredients:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {recipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3 className="text-xl font-bold mt-6 mb-2">👨‍🍳 Instructions:</h3>
            <ol className="list-decimal list-inside text-gray-700 space-y-1">
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        )}
      </main>

      <footer className="text-center text-sm text-gray-500 py-4">
        &copy; {new Date().getFullYear()} Recipe AI. All rights reserved.
      </footer>
    </div>
  );
}
