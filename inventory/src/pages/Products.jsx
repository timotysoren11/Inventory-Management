import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import ProductFilters from "../components/products/ProductFilters";
import ProductTable from "../components/products/ProductList";

const Products = () => {

  //states
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [sortBy, setSortBy] = useState("");

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Laptop",
      sku: "LP001",
      category: "Electronics",
      price: 50000,
      quantity: 10,
      status: "In Stock",
    },
    {
      id: 2,
      name: "Mouse",
      sku: "MS001",
      category: "Accessories",
      price: 800,
      quantity: 25,
      status: "In Stock",
    },
    {
      id: 3,
      name: "Keyboard",
      sku: "KB001",
      category: "Accessories",
      price: 1200,
      quantity: 4,
      status: "Low Stock",
    },
    {
      id: 4,
      name: "Monitor",
      sku: "MN001",
      category: "Electronics",
      price: 15000,
      quantity: 0,
      status: "Out of Stock",
    },
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showView, setShowView] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  // view
  const handleView = (product) => {
    setSelectedProduct(product);
    setShowView(true);
  };

  // confirm Delete
  const confirmDelete = () => {
    setProducts((currentProducts) =>
      currentProducts.filter(
        (product) => product.id !== selectedProduct.id
      )
    );

    setSelectedProduct(null);
    setShowDelete(false);
  }

  // filter
  const filteredProducts = products.filter((products) => {
    return category === "" || products.category === category;
  })
  .filter((products) => {
    return status === "" || products.status === status;
  });

  //sorting
  if (sortBy === "name") {
    filteredProducts.sort((a,b) =>
      a.price - b.price
    )
  }
  if (sortBy === "quantity") {
    filteredProducts.sort((a,b) =>
      a.quantity - b.quantity
    );
  }

// delete handle
const handleDelete = (id) => {
  setProducts((currentProducts) => 
  currentProducts.filter((product) => product.id !==id)
  );
}
  return (
    <div>

      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-2xl text-gray-900 font-sans">
          Manage your Inventory Products
        </h3>

        <button className="flex items-center border border-gray-950 px-2 rounded-md text-gray-900">
          <IoIosAdd size={20} />
          Add Products
        </button>
      </div>
      <div className="py-5 flex flex-col gap-4">
        <ProductFilters 
          category={category}
          sortBy={status}
          onCategoryChange={setCategory}
          onStatusChange={setStatus}
          onSortChange={setSortBy}
        />
        <ProductTable 
        products={products}
        onView={handleView} 
        onDelete={handleDelete}
        />

        {showView && selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40">

          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">

            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">
                Product Details
              </h2>

              <button
                onClick={() => setShowView(false)}
                className="text-gray-500 hover:text-gray-900"
              >
                ✕
              </button>
            </div>

            <div className="mt-5 space-y-3">

              <p>
                <strong>Product:</strong>{" "}
                {selectedProduct.name}
              </p>

              <p>
                <strong>SKU:</strong>{" "}
                {selectedProduct.sku}
              </p>

              <p>
                <strong>Category:</strong>{" "}
                {selectedProduct.category}
              </p>

              <p>
                <strong>Price:</strong>{" "}
                ₹{selectedProduct.price}
              </p>

              <p>
                <strong>Quantity:</strong>{" "}
                {selectedProduct.quantity}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                {selectedProduct.status}
              </p>

            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowView(false)}
                className="rounded-md border px-4 py-2"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Delete Confirmation */}
      {showDelete && selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40">

          <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-lg">

            <h2 className="text-lg font-semibold text-gray-900">
              Delete Product?
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Are you sure you want to delete{" "}
              <strong>{selectedProduct.name}</strong>?
            </p>

            <div className="mt-6 flex justify-end gap-3">

              {/* Cancel */}
              <button
                onClick={() => {
                  setSelectedProduct(null);
                  setShowDelete(false);
                }}
                className="rounded-md border border-gray-300 px-4 py-2"
              >
                Cancel
              </button>

              {/* Confirm */}
              <button
                onClick={confirmDelete}
                className="rounded-md bg-red-600 px-4 py-2 text-white"
              >
                Delete
              </button>

            </div>

          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Products;