"use client";

import { addGrocery} from "../components/actions";

export default function Form() {
    return (
        <form action={addGrocery} className="space-y-4">
        <div>
          <label htmlFor="item" className="block text-sm font-medium text-gray-700">
            Item
          </label>
          <input
            type="text"
            name="item"
            id="item"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter grocery item"
          />
        </div>

        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
            Quantity
          </label>
          <input
            type="number"
            name="quantity"
            id="quantity"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter quantity"
          />
        </div>

        <div>
          <label htmlFor="measurement" className="block text-sm font-medium text-gray-700">
            Measurement
          </label>
          <input
            type="text"
            name="measurement"
            id="measurement"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter measurement (e.g., kg, lb)"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Add Grocery
        </button>
      </form>
    );
}