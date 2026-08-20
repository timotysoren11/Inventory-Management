const CategoryList = ({
  categories,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">

      <table className="w-full text-sm">

        <thead className="border-b border-gray-200 bg-gray-50">

          <tr className="text-left text-gray-600">

            <th className="px-5 py-4 font-medium">
              Category
            </th>

            <th className="px-5 py-4 text-right font-medium">
              Actions
            </th>

          </tr>

        </thead>


        <tbody>

          {categories.length > 0 ? (

            categories.map((category) => (

              <tr
                key={category.id}
                className="border-b border-gray-100 last:border-none hover:bg-gray-50"
              >

                <td className="px-5 py-4 font-medium text-gray-900">
                  {category.name}
                </td>


                <td className="px-5 py-4">

                  <div className="flex justify-end gap-3">

                    <button
                      onClick={() => onEdit(category)}
                      className="text-green-600 hover:underline"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => onDelete(category)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>

                  </div>

                </td>

              </tr>

            ))

          ) : (

            <tr>

              <td
                colSpan="2"
                className="px-5 py-10 text-center text-gray-500"
              >
                No categories found.
              </td>

            </tr>

          )}

        </tbody>

      </table>

    </div>
  );
};

export default CategoryList;