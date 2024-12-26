"use client";

import React from "react";
import { removeRecipe } from "./actions";
import { redirect } from 'next/navigation'

export default function DeleteBtnRecipes(id: number) {
    return (
        <button
        onClick={() => {
          removeRecipe(id);
          redirect(`/view-recipes/`);
        }}
        className="py-1 px-3 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
        Remove
      </button>
    );
}