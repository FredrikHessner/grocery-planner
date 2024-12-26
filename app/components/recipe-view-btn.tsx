"use client";

import { redirect } from 'next/navigation'

export default function RecipeViewBtn({name}) {

    return (
        <button
        onClick={() => {redirect(`/view-recipes/${name}`)}}
        className="py-1 px-3 bg-red-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
        See full recipe
      </button>
    );
}