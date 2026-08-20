import { useState } from "react";
import { IoIosAdd } from "react-icons/io";

import productsData from "../data/products";

import categoriesData from "../data/categories";

import CategoryList from "../components/categories/CategoryList";
import CategoryForm from "../components/categories/CategoryForm";
import DeleteConfirmModal from "../components/products/DeleteConfirmModal";

const Categories = () => {

  const [products] = useState(productsData);
  const [categories, setCategories] = useState(categoriesData);
  const [showForm, setShowForm] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [deletingCategory, setDeletingCategory] = useState(null);


  const handleAddCategory = (name) => {

    const newCategory = {
      id: Date.now(),
      name,
    };

    setCategories((currentCategories) => [
      ...currentCategories,
      newCategory,
    ]);

    setShowForm(false);
  };

  const handleEditCategory = (category) => {

    setEditingCategory(category);
    setShowForm(true);
  };

  const handleUpdateCategory = (name) => {

    setCategories((currentCategories) =>
      currentCategories.map((category) =>
        category.id === editingCategory.id
          ? {
              ...category,
              name,
            }
          : category
      )
    );

    setEditingCategory(null);
    setShowForm(false);
  };

  const handleDeleteCategory = (category) => {
    const productCount = products.filter(
      (product) => product.category === category.name).length;

    if (productCount > 0 ) {
      alert(
        `Cannot delete "${category.name}". ${productCount} product(s) are using this category.`
      );

      return;
    }
    
    setDeletingCategory(category);
  };

  const handleConfirmDelete = () => {

    setCategories((currentCategories) =>
      currentCategories.filter(
        (category) =>
          category.id !== deletingCategory.id
      )
    );

    setDeletingCategory(null);
  };

  const handleCloseForm = () => {

    setEditingCategory(null);
    setShowForm(false);
  };

  const handleOpenAddForm = () => {

    setEditingCategory(null);
    setShowForm(true);
  };


  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Categories
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your product categories
          </p>
        </div>
        <button
          onClick={handleOpenAddForm}
          className="flex items-center gap-1 rounded-md border border-gray-900 px-3 py-2 text-sm hover:bg-gray-50"
        >
          <IoIosAdd size={20} />
          Add Category
        </button>
      </div>

      {/* CATEGORY LIST */}
      <CategoryList
        categories={categories}
        onEdit={handleEditCategory}
        onDelete={handleDeleteCategory}
      />

      {/* ADD / EDIT FORM */}
      {showForm && (
        <CategoryForm
          key={editingCategory?.id ?? "new"}
          category={editingCategory}
          onSubmit={
            editingCategory
              ? handleUpdateCategory
              : handleAddCategory
          }
          onCancel={handleCloseForm}
        />

      )}

      {/* DELETE CONFIRMATION */}

      {deletingCategory && (
        <DeleteConfirmModal
          item={{
            name: deletingCategory.name,
          }}
          onConfirm={handleConfirmDelete}
          onCancel={() =>
            setDeletingCategory(null)
          }
        />
      )}
    </div>
  );
};

export default Categories;