import ProductStatusBadge from "./ProductStatusBadge";

const ProductTable = ({
  products,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">

      <div className="overflow-x-auto">

        <table className="w-full text-sm">

          {/* TABLE HEADER */}

          <thead className="border-b border-gray-200 bg-gray-50">

            <tr className="text-left text-gray-600">

              <th className="px-5 py-4 font-medium">
                Product
              </th>

              <th className="px-5 py-4 font-medium">
                SKU
              </th>

              <th className="px-5 py-4 font-medium">
                Category
              </th>

              <th className="px-5 py-4 font-medium">
                Price
              </th>

              <th className="px-5 py-4 font-medium">
                Quantity
              </th>

              <th className="px-5 py-4 font-medium">
                Status
              </th>

              <th className="px-5 py-4 font-medium">
                Actions
              </th>

            </tr>

          </thead>


          {/* TABLE BODY */}

          <tbody>

            {products.length > 0 ? (

              products.map((product) => (

                <tr
                  key={product.id}
                  className="border-b border-gray-100 last:border-none hover:bg-gray-50"
                >

                  {/* PRODUCT */}

                  <td className="px-5 py-4 font-medium text-gray-900">
                    {product.name}
                  </td>


                  {/* SKU */}

                  <td className="px-5 py-4 text-gray-500">
                    {product.sku}
                  </td>


                  {/* CATEGORY */}

                  <td className="px-5 py-4 text-gray-500">
                    {product.category}
                  </td>


                  {/* PRICE */}

                  <td className="px-5 py-4 text-gray-700">
                    ₹{product.price.toLocaleString()}
                  </td>


                  {/* QUANTITY */}

                  <td className="px-5 py-4 text-gray-700">
                    {product.quantity}
                  </td>


                  {/* STATUS */}

                  <td className="px-5 py-4">

                    <ProductStatusBadge
                      quantity={product.quantity}
                    />

                  </td>


                  {/* ACTIONS */}

                  <td className="px-5 py-4">

                    <div className="flex gap-3">

                      {/* EDIT */}

                      <button
                        onClick={() => onEdit(product)}
                        className="text-green-600 hover:underline"
                      >
                        Edit
                      </button>


                      {/* DELETE */}

                      <button
                        onClick={() => onDelete(product)}
                        className="text-red-600 hover:underline"
                      >
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>

              ))

            ) : (

              /* EMPTY STATE */

              <tr>

                <td
                  colSpan="7"
                  className="px-5 py-10 text-center text-gray-500"
                >
                  No products found.
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default ProductTable;