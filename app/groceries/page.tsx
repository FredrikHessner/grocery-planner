
import prisma from "@/lib/db";
import Form from "../components/form";
import DeleteBtn from "../components/delete-btn";

export default async function Groceries() {
  const groceries = await prisma.groceries.findMany();

  return (
  <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
    {/* Header Section */}
    <div className="bg-white shadow-md rounded-md p-6 mb-6 w-3/4 max-w-xl text-center">
      <h1 className="text-3xl font-bold text-gray-800">Groceries</h1>
    </div>

    {/* Groceries List */}
    <ul className="bg-white shadow-md rounded-md w-3/4 max-w-xl p-6 space-y-4">
      {groceries.map((grocery) => (
        <li
          key={grocery.item}
          className="flex justify-between items-center p-4 border-b border-gray-200 last:border-none"
        >
          <div>
            <strong className="text-lg text-gray-800">{grocery.item}</strong>
            <p className="text-sm text-gray-600">
              {grocery.quantity} {grocery.measurement}
            </p>
          </div>
          <DeleteBtn item={grocery.item} />

        </li>
      ))}
    </ul>

    {/* Form Section */}
    <div className="bg-white shadow-md rounded-md w-3/4 max-w-xl p-6 mt-6">
      <Form/>
    </div>
  </div>

  )

};

