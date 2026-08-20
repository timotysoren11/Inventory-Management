import { useState } from "react";
import { IoIosAdd } from "react-icons/io";

import productsData from "../data/products";

import ProductFilters from "../components/products/ProductFilters";
import ProductTable from "../components/products/ProductList";
import ProductForm from "../components/products/ProductForm";

import DeleteConfirmModal from "../components/products/DeleteConfirmModal";

const Products = () => {

  const [products, setProducts] = useState(productsData);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [deletingProduct, setDeletingProduct] = useState(null);

  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [sortBy, setSortBy] = useState("");

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleDelete = (product) => {
    setDeletingProduct(product);
  };

  const handleConfirmDelete = () =>{
    setProducts((currentProducts) =>
      currentProducts.filter(
        (product) => product.id !== deletingProduct.id
      )
    );

    setDeletingProduct(null);
  };

  const handleCancelDelete = () => {
    setDeletingProduct(null);
  }

  const handleAddProduct = (productData) => {
    const newProduct = {
      id: Date.now(),
      ...productData,
    };

    setProducts((currentProducts) => [
      ...currentProducts,
      newProduct,
    ]);

    setShowForm(false);
  };

  const handleUpdateProduct = (updatedProduct) => {
    setProducts((currentProducts) =>
      currentProducts.map((product) =>
        product.id === editingProduct.id
          ? {
              ...updatedProduct,
              id: editingProduct.id,
            }
          : product
      )
    );

    setEditingProduct(null);
    setShowForm(false);
  };

  const filteredProducts = products.filter((product) => {

    // Category filter
    if (
      category &&
      product.category !== category
    ) {
      return false;
    }


    // Status filter
    if (status) {

      let productStatus;

      if (product.quantity === 0) {
        productStatus = "Out of Stock";
      } else if (product.quantity <= 5) {
        productStatus = "Low Stock";
      } else {
        productStatus = "In Stock";
      }

      if (productStatus !== status) {
        return false;
      }
    }


    return true;
  });

  const sortedProducts = [...filteredProducts];

  if (sortBy === "name") {
    sortedProducts.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  if (sortBy === "price") {
    sortedProducts.sort(
      (a, b) => a.price - b.price
    );
  }

  if (sortBy === "quantity") {
    sortedProducts.sort(
      (a, b) => a.quantity - b.quantity
    );
  }

  const handleClearFilters = () => {
    setCategory("");
    setStatus("");
    setSortBy("");
  };

  const handleOpenAddForm = () => {
    // Make sure form opens in Add mode
    setEditingProduct(null);

    setShowForm(true);
  };

  const handleCloseForm = () => {
    setEditingProduct(null);
    setShowForm(false);
  };

  return (
    <div className="space-y-6">

      {/* HEADER */}

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-2xl font-semibold text-gray-900">
            Products
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage your inventory products
          </p>

        </div>

        <button
          onClick={handleOpenAddForm}
          className="flex items-center gap-1 rounded-md border border-gray-900 px-3 py-2 text-sm hover:bg-gray-50"
        >
          <IoIosAdd size={20} />
          Add Product
        </button>

      </div>

      {/* FILTERS */}

      <ProductFilters
        category={category}
        status={status}
        sortBy={sortBy}

        onCategoryChange={setCategory}
        onStatusChange={setStatus}
        onSortChange={setSortBy}

        onClear={handleClearFilters}
      />

      {/* PRODUCT TABLE */}

      <ProductTable
        products={sortedProducts}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* ADD / EDIT FORM */}

      {showForm && (
        <ProductForm
          product={editingProduct}

          onSubmit={
            editingProduct
              ? handleUpdateProduct
              : handleAddProduct
          }

          onCancel={handleCloseForm}
        />
      )}

      {/* Delete confirmation */}
      {deletingProduct && (
        <DeleteConfirmModal
          item={deletingProduct}
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}

    </div>
  );
};

export default Products;