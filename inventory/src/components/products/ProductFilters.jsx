import categories from "../../data/categories";


const ProductFilters = ({
  category,
  status,
  sortBy,
  onCategoryChange,
  onStatusChange,
  onSortChange,
  onClear,
}) => {

  return (
    <div className="flex flex-wrap items-center gap-3">

      {/* Category */}
      <select
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option 
            key={category.id}
            value={category.id}
          />
        ))}
      </select>

      {/* Status */}
      <select
        value={status}
        onChange={(e) =>
          onStatusChange(e.target.value)
        }
        className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
      >
        <option value="">All Status</option>
        <option value="In Stock">
          In Stock
        </option>
        <option value="Low Stock">
          Low Stock
        </option>
        <option value="Out of Stock">
          Out of Stock
        </option>
      </select>

      {/* Sort */}
      <select
        value={sortBy}
        onChange={(e) =>
          onSortChange(e.target.value)
        }
        className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm"
      >
        <option value="">Sort By</option>
        <option value="name">
          Name
        </option>
        <option value="price">
          Price
        </option>
        <option value="quantity">
          Quantity
        </option>
      </select>

      {/* Clear */}
      <button
        onClick={onClear}
        className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
      >
        Clear Filters
      </button>

    </div>
  );
};

export default ProductFilters;