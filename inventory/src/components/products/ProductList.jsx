import { useState } from "react";

import ProductStatusBadge from "./ProductStatusBadge";

const PRODUCTS_PER_PAGE = 10;

const ProductTable = ({
  products,
  onEdit,
  onDelete,
}) => {


  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(
    products.length / PRODUCTS_PER_PAGE
  );


  const startIndex =
    (currentPage - 1) * PRODUCTS_PER_PAGE;

  const endIndex =
    startIndex + PRODUCTS_PER_PAGE;

  const currentProducts = products.slice(
    startIndex,
    endIndex
  );


  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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

            {currentProducts.length > 0 ? (

              currentProducts.map((product) => (

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

                      <button
                        onClick={() => onEdit(product)}
                        className="text-green-600 hover:underline"
                      >
                        Edit
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

              ))

            ) : (

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

      {/*PAGINATION */}

      {totalPages > 1 && (

        <div className="flex items-center justify-between border-t border-gray-200 px-5 py-4">

          {/* RESULTS */}

          <p className="text-sm text-gray-500">

            Showing{" "}

            <span className="font-medium text-gray-900">
              {startIndex + 1}
            </span>

            {" "}to{" "}

            <span className="font-medium text-gray-900">
              {Math.min(endIndex, products.length)}
            </span>

            {" "}of{" "}

            <span className="font-medium text-gray-900">
              {products.length}
            </span>

            {" "}products

          </p>

          {/* PAGINATION */}

          <div className="flex items-center gap-1">

            {/* PREVIOUS */}

            <button
              disabled={currentPage === 1}
              onClick={() =>
                handlePageChange(currentPage - 1)
              }
              className="rounded-md border border-gray-300 px-3 py-1.5 text-sm disabled:cursor-not-allowed disabled:opacity-40 hover:bg-gray-50"
            >
              Previous
            </button>


            {/* PAGE NUMBERS */}

            {Array.from(
              { length: totalPages },
              (_, index) => index + 1
            ).map((page) => (

              <button
                key={page}
                onClick={() =>
                  handlePageChange(page)
                }
                className={`rounded-md px-3 py-1.5 text-sm ${
                  currentPage === page
                    ? "bg-gray-900 text-white"
                    : "border border-gray-300 hover:bg-gray-50"
                }`}
              >
                {page}
              </button>

            ))}

            {/* NEXT */}

            <button
              disabled={currentPage === totalPages}
              onClick={() =>
                handlePageChange(currentPage + 1)
              }
              className="rounded-md border border-gray-300 px-3 py-1.5 text-sm disabled:cursor-not-allowed disabled:opacity-40 hover:bg-gray-50"
            >
              Next
            </button>

          </div>

        </div>

      )}

    </div>
  );
};

export default ProductTable;