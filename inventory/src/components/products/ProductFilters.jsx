const ProductFilters = ({
  category,
  status,
  sortBy,
  onCategoryChange,
  onStatusChange,
  onSortChange,
}) => {
  return (
    <div className="flex flex-wrap gap-4">

      {/* Category */}
      <select
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)} 
        className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none"
        >
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="accessories">Accessories</option>
      </select>

      {/* Stock Status */}
      <select 
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
        className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none"
        >
        <option value="">All Status</option>
        <option value="in-stock">In Stock</option>
        <option value="low-stock">Low Stock</option>
        <option value="out-of-stock">Out of Stock</option>
      </select>

      {/* Sort */}
      <select 
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none"
        >
        <option value="">Sort By</option>
        <option value="name">Name</option>
        <option value="price">Price</option>
        <option value="quantity">Quantity</option>
      </select>

    </div>
  );
};

export default ProductFilters;