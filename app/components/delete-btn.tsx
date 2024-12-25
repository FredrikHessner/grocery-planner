"use client";

import React from "react";
import { removeGrocery } from "./actions";

export default function DeleteBtn(item: string) {
    return (
        <button
        onClick={() => {removeGrocery(item)}}
        className="py-1 px-3 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
        Remove
      </button>
    );
}