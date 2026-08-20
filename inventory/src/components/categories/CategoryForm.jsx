import { useState } from "react";

const CategoryForm = ({
  category,
  onSubmit,
  onCancel,
}) => {
  const [name, setName] = useState(
    category?.name || ""
  );

  const isEdit = Boolean(category);

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedName = name.trim();

    if (!trimmedName) {
      return;
    }

    onSubmit(trimmedName);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">

        {/* HEADER */}

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-xl font-semibold text-gray-900">
              {isEdit
                ? "Edit Category"
                : "Add Category"}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {isEdit
                ? "Update category information"
                : "Add a new product category"}
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

          <div>

            <label className="text-sm font-medium text-gray-700">
              Category Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              placeholder="Enter category name"
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
                ? "Update Category"
                : "Add Category"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default CategoryForm;