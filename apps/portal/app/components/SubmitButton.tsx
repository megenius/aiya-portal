
const SubmitButton = ({ isSubmitting, onClick, disabled }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isSubmitting || disabled}
      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-2 focus:ring-blue-500"
    >
      {isSubmitting ? 'Saving...' : 'Save changes'}
    </button>
  );
};


export default SubmitButton