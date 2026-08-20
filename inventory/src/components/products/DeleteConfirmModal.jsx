const DeleteConfirmModal = ({
  item,
  onConfirm,
  onCancel,
}) => {

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">

        {/* HEADER */}

        <h2 className="text-lg font-semibold text-gray-900">
          Delete Item?
        </h2>

        {/* MESSAGE */}

        <p className="mt-2 text-sm text-gray-500">
          Are you sure you want to delete{" "}

          <span className="font-medium text-gray-900">
            {item.name}
          </span>

          ? This action cannot be undone.
        </p>


        {/* ACTIONS */}

        <div className="mt-6 flex justify-end gap-3">

          <button
            type="button"
            onClick={onCancel}
            className="rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onConfirm}
            className="rounded-md bg-red-600 px-4 py-2 text-sm text-white hover:bg-red-700"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
};

export default DeleteConfirmModal;