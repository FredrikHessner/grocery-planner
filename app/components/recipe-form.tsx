"use client";

import { addRecipe } from "./actions";

export default function RecipeForm() {
  return (
    <form action={addRecipe} className="space-y-6 bg-white p-6 rounded-md shadow-md w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-bold text-gray-800">Add a New Recipe</h2>

      {/* Recipe Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Recipe Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter recipe name"
          required
        />
      </div>

      {/* Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          name="description"
          id="description"
          rows={3}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter a brief description"
          required
        ></textarea>
      </div>

      {/* Instructions */}
      <div>
        <label htmlFor="instructions" className="block text-sm font-medium text-gray-700">
          Instructions
        </label>
        <textarea
          name="instructions"
          id="instructions"
          rows={5}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter cooking instructions"
          required
        ></textarea>
      </div>

      {/* Preparation Time */}
      <div>
        <label htmlFor="prep_time" className="block text-sm font-medium text-gray-700">
          Preparation Time (minutes)
        </label>
        <input
          type="number"
          name="prep_time"
          id="prep_time"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter preparation time"
          required
        />
      </div>

      {/* Cooking Time */}
      <div>
        <label htmlFor="cook_time" className="block text-sm font-medium text-gray-700">
          Cooking Time (minutes)
        </label>
        <input
          type="number"
          name="cook_time"
          id="cook_time"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter cooking time"
          required
        />
      </div>

      {/* Servings */}
      <div>
        <label htmlFor="servings" className="block text-sm font-medium text-gray-700">
          Servings
        </label>
        <input
          type="number"
          name="servings"
          id="servings"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter number of servings"
          required
        />
      </div>

      {/* Difficulty */}
      <div>
        <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700">
          Difficulty (Easy, Medium, Hard)
        </label>
        <input
          type="text"
          name="difficulty"
          id="difficulty"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter difficulty level"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Add Recipe
      </button>
    </form>
  );
}
