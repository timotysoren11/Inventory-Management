import { useState } from "react";

import categories from "../../data/categories";

const emptyProduct = {
  name: "",
  sku: "",
  category: "",
  price: "",
  quantity: "",
};

const ProductForm = ({
  product,
  onSubmit,
  onCancel,
}) => {

  const [formData, setFormData] = useState(
    product
      ? {
          name: product.name,
          sku: product.sku,
          category: product.category,
          price: product.price,
          quantity: product.quantity,
        }
      : emptyProduct
  );

  const isEdit = Boolean(product);


  // =========================================
  // HANDLE INPUT CHANGE
  // =========================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };


  // =========================================
  // HANDLE SUBMIT
  // =========================================

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      ...formData,
      price: Number(formData.price),
      quantity: Number(formData.quantity),
    });
  };


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-lg rounded-xl bg-white p-6 shadow-xl">

        {/* HEADER */}

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-xl font-semibold text-gray-900">
              {isEdit ? "Edit Product" : "Add Product"}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {isEdit
                ? "Update product information"
                : "Add a new product to your inventory"}
            </p>

          </div>

          <button
            type="button"
            onClick={onCancel}
            className="text-gray-400 hover:text-gray-900"
          >
            ✕
          </button>

        </div>


        {/* FORM */}

        <form
          onSubmit={handleSubmit}
          className="mt-6 space-y-4"
        >

          {/* PRODUCT NAME */}

          <div>

            <label className="text-sm font-medium text-gray-700">
              Product Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter product name"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-gray-900"
              required
            />

          </div>


          {/* SKU */}

          <div>

            <label className="text-sm font-medium text-gray-700">
              SKU
            </label>

            <input
              type="text"
              name="sku"
              value={formData.sku}
              onChange={handleChange}
              placeholder="Enter SKU"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-gray-900"
              required
            />

          </div>


          {/* CATEGORY */}

          <div>

            <label className="text-sm font-medium text-gray-700">
              Category
            </label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-gray-900"
              required
            >

              <option value="">
                Select category
              </option>

              {categories.map((category) => (
                <option
                  key={category.id}
                  value={category.name}
                >
                  {category.name}
                </option>
              ))}

            </select>

          </div>


          {/* PRICE */}

          <div>

            <label className="text-sm font-medium text-gray-700">
              Price
            </label>

            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              min="0"
              placeholder="Enter price"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-gray-900"
              required
            />

          </div>


          {/* QUANTITY */}

          <div>

            <label className="text-sm font-medium text-gray-700">
              Quantity
            </label>

            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              min="0"
              placeholder="Enter quantity"
              className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-gray-900"
              required
            />

          </div>


          {/* BUTTONS */}

          <div className="flex justify-end gap-3 pt-4">

            <button
              type="button"
              onClick={onCancel}
              className="rounded-md border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-md bg-gray-900 px-4 py-2 text-sm text-white hover:bg-gray-800"
            >
              {isEdit
                ? "Update Product"
                : "Add Product"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default ProductForm;