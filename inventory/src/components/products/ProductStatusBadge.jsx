const ProductStatusBadge = ({ quantity }) => {
  let status;
  let styles;

  if (quantity === 0) {
    status = "Out of Stock";
    styles = "bg-red-100 text-red-700";
  } else if (quantity <= 5) {
    status = "Low Stock";
    styles = "bg-yellow-100 text-yellow-700";
  } else {
    status = "In Stock";
    styles = "bg-green-100 text-green-700";
  }

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium ${styles}`}
    >
      {status}
    </span>
  );
};

export default ProductStatusBadge;