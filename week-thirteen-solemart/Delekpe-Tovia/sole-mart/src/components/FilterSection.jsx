const filters = ["Shoe type", "Price", "Size selection", "Color", "Material", "Brand"];

const Filters = () => (
  <div className="flex justify-center my-6">
    <div className="flex flex-wrap gap-3 justify-center">
      {filters.map((filter) => (
        <button
          key={filter}
          className="bg-gray-200 px-4 py-2 rounded-full text-sm hover:bg-gray-300 transition"
        >
          {filter} ▼
        </button>
      ))}
    </div>
  </div>
);

const FilterBar = () => {
  return (
    <div className="bg-cream py-4 px-6 flex flex-wrap gap-2 justify-center border-b border-gray-200">
      {filters.map((filter, idx) => (
        <button
          key={idx}
          className="bg-white border rounded-full px-4 py-1 text-sm text-gray-600 hover:bg-gray-50"
        >
          {filter} <i className="fas fa-chevron-down ml-1 text-xs"></i>
        </button>
      ))}
    </div>
  );
};

export default Filters;
