const ProductTable = ({ products, onView, onDelete }) => {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">

      <div className="overflow-x-auto">

        <table className="w-full text-sm">

          <thead className="border-b border-gray-200 bg-gray-50 text-left">
            <tr>
              <th className="px-5 py-3">Product</th>
              <th className="px-5 py-3">SKU</th>
              <th className="px-5 py-3">Category</th>
              <th className="px-5 py-3">Price</th>
              <th className="px-5 py-3">Quantity</th>
              <th className="px-5 py-3">Status</th>
              <th className="px-5 py-3">Actions</th>
            </tr>
          </thead>

          <tbody>

            {products.map((product) => (
              <tr
                key={product.id}
                className="border-b border-gray-100"
              >

                <td className="px-5 py-4 font-medium">
                  {product.name}
                </td>

                <td className="px-5 py-4">
                  {product.sku}
                </td>

                <td className="px-5 py-4">
                  {product.category}
                </td>

                <td className="px-5 py-4">
                  ₹{product.price}
                </td>

                <td className="px-5 py-4">
                  {product.quantity}
                </td>

                <td className="px-5 py-4">
                  {product.status}
                </td>

                <td className="px-5 py-4">
                  <div className="flex gap-3">

                    <button
                      onClick={() => onView(product)}
                      className="text-blue-600 hover:underline"
                    >
                      View
                    </button>

                    <button
                      onClick={() => onDelete(product)}
                      className="text-red-600 hover:underline"
                    >
                      Delete
                    </button>

                  </div>
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default ProductTable;