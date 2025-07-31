// app/about/page.tsx
'use client';

import Navbar from '../components/Navbar'; // Adjust path based on your structure

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-blue-600 mb-6">About RecipeAI</h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Welcome to <strong>RecipeAI</strong>, your intelligent companion in the kitchen! Our platform leverages cutting-edge AI technology to help users discover personalized and creative recipes based on ingredients, preferences, and dietary needs.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          Whether you're a home cook or an adventurous foodie, RecipeAI is designed to make cooking enjoyable, efficient, and innovative. Just tell us what you have — we’ll do the rest.
        </p>

        <p className="text-gray-700 text-lg leading-relaxed mt-4">
          Developed with ❤️ using Next.js, Tailwind CSS, and Express, our mission is to blend technology with culinary passion to simplify your meal planning experience.
        </p>
      </main>
    </>
  );
}
