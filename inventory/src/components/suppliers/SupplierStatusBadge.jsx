const SupplierStatusBadge = ({ status }) => {

  const isActive = status === "Active";

  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
        isActive
          ? "bg-green-100 text-green-700"
          : "bg-gray-100 text-gray-600"
      }`}
    >
      {status}
    </span>
  );
};

export default SupplierStatusBadge;