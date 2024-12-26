import prisma from "@/lib/db";
import DeleteBtnRecipes from "../../components/delete-btn-recipes";

export default async function ViewRecipe({ params } ) {
  const { name } = await params;
  console.log(name);

  const recipe = await prisma.recipes.findUnique({
    where: {
      name_slug : name as string,
    },
  })

  return (
  <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
    {/* Header Section */}
    <div className="bg-white shadow-md rounded-md p-6 mb-6 w-3/4 max-w-xl text-center">
      <h1 className="text-3xl font-bold text-gray-800">Recipes</h1>
    </div>

    <div className="p-6 bg-white shadow-md rounded-lg border border-gray-200 mb-6">
    <div className="flex flex-col space-y-3">
        <h2 className="text-2xl font-bold text-gray-800">{recipe.name}</h2>
        <p className="text-gray-600 text-base">{recipe.description}</p>
    </div>
    
    <div className="mt-4 border-t border-gray-300 pt-4 text-sm text-gray-700 space-y-2">
        <p>
        <span className="font-semibold">Instructions:</span> {recipe.instructions}
        </p>
        <p>
        <span className="font-semibold">Preparation Time:</span> {recipe.prep_time} minutes
        </p>
        <p>
        <span className="font-semibold">Cooking Time:</span> {recipe.cook_time} minutes
        </p>
        <p>
        <span className="font-semibold">Servings:</span> {recipe.servings}
        </p>
        <p>
        <span className="font-semibold">Difficulty:</span> {recipe.difficulty}
        </p>
    </div>
    <DeleteBtnRecipes id={recipe.id} />
</div>
  </div>

  )

};