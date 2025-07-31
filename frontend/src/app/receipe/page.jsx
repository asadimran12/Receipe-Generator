import { Bookmark } from 'lucide-react';
import Navbar from '../components/Navbar';

export default function RecipesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      <Navbar />

      <main className="flex flex-col items-center justify-center px-4 py-20">
        <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-3xl w-full text-center transition-all duration-300 hover:shadow-pink-200">
          <div className="flex flex-col items-center mb-6">
            <Bookmark className="w-12 h-12 text-pink-500 mb-2" />
            <h1 className="text-4xl font-extrabold text-pink-600">Saved Recipes</h1>
            <p className="text-gray-600 mt-3 max-w-md">
              This is where all your delicious, AI-generated recipes will be saved for later access.
            </p>
          </div>

          <div className="border-2 border-dashed border-pink-200 rounded-xl p-8 text-gray-500 bg-pink-50/40">
            <p className="text-lg font-medium">🍽️ No recipes saved yet.</p>
            <p className="text-sm mt-2">
              Start by generating a recipe on the <span className="text-pink-500 font-semibold">Home</span> page.
            </p>
          </div>

          <footer className="mt-10 text-sm text-gray-400">
            &copy; {new Date().getFullYear()} <span className="font-medium">RecipeAI</span>. Your smart kitchen companion.
          </footer>
        </div>
      </main>
    </div>
  );
}
