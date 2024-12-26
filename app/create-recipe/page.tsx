
import prisma from "@/lib/db";
import DeleteBtn from "../components/delete-btn";
import RecipeForm from "../components/recipe-form";
import DeleteBtnRecipes from "../components/delete-btn-recipes";

export default async function CreateRecipes() {
  const recipes = await prisma.recipes.findMany();

  return (
  <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
    {/* Header Section */}
    <div className="bg-white shadow-md rounded-md p-6 mb-6 w-3/4 max-w-xl text-center">
      <h1 className="text-3xl font-bold text-gray-800">Recipes</h1>
    </div>

    {/* Form Section */}
    <div className="bg-white shadow-md rounded-md w-3/4 max-w-xl p-6 mt-6">
        <RecipeForm/>
    </div>
  </div>

  )

};