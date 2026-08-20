import SupplierStatusBadge from "./SupplierStatusBadge";

const SupplierList = ({ 
  suppliers,
  onEdit,
  onDelete,

}) => {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">

      <div className="overflow-x-auto">

        <table className="w-full text-sm">

          <thead className="border-b border-gray-200 bg-gray-50">

            <tr className="text-left text-gray-600">

              <th className="px-5 py-4 font-medium">
                Supplier
              </th>

              <th className="px-5 py-4 font-medium">
                Contact Person
              </th>

              <th className="px-5 py-4 font-medium">
                Email
              </th>

              <th className="px-5 py-4 font-medium">
                Phone
              </th>

              <th className="px-5 py-4 font-medium">
                Address
              </th>

              <th className="px-5 py-4 font-medium">
                Status
              </th>

              <th className="px-5 py-4 font-medium">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {suppliers.length > 0 ? (

              suppliers.map((supplier) => (

                <tr
                  key={supplier.id}
                  className="border-b border-gray-100 last:border-none hover:bg-gray-50"
                >

                  <td className="px-5 py-4 font-medium text-gray-900">
                    {supplier.name}
                  </td>

                  <td className="px-5 py-4 text-gray-600">
                    {supplier.contactPerson}
                  </td>

                  <td className="px-5 py-4 text-gray-500">
                    {supplier.email}
                  </td>

                  <td className="px-5 py-4 text-gray-500">
                    {supplier.phone}
                  </td>

                  <td className="px-5 py-4 text-gray-500">
                    {supplier.address}
                  </td>

                  <td className="px-5 py-4 text-gray-500">
                    <SupplierStatusBadge
                      status={supplier.status}
                    />
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex gap-3">

                      <button className="text-green-600 hover:underline"
                        onClick={() => onEdit(supplier)}
                      >
                        Edit
                      </button>

                      <button 
                        onClick={() => onDelete(supplier)}
                        className="text-red-600 hover:underline">
                        Delete
                      </button>

                    </div>
                  </td>

                </tr>

              ))

            ) : (

              <tr>
                <td
                  colSpan="7"
                  className="px-5 py-10 text-center text-gray-500"
                >
                  No suppliers found.
                </td>
              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default SupplierList;