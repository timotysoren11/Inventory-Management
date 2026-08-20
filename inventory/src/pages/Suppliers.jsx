import suppliersData from "../data/suppliers";
import SupplierList from "../components/suppliers/SupplierList";

const Suppliers = () => {

  const suppliers = suppliersData;

  return (
    <div className="space-y-6">

      {/* HEADER */}

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            Suppliers
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage your product suppliers
          </p>
        </div>

        <button
          className="rounded-md border border-gray-900 px-3 py-2 text-sm hover:bg-gray-50"
        >
          Add Supplier
        </button>

      </div>


      {/* SUPPLIER LIST */}

      <SupplierList
        suppliers={suppliers}
      />

    </div>
  );
};

export default Suppliers;