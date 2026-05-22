export default function FilterBar({
  filter,
  setFilter,
  sorted,
  setSorted,
  clearAllExpenses,
}) {
  const expCategories = [
    { id: 1, category: "All" },
    { id: 2, category: "Food" },
    { id: 3, category: "Transport" },
    { id: 4, category: "Shopping" },
    { id: 5, category: "Bills" },
    { id: 6, category: "Entertainment" },
    { id: 7, category: "Other" },
  ];
  return (
    <section className="w-full h-20 flex items-center mt-2 shadow rounded-lg px-3">
      <div className="w-full flex items-center justify-between gap-3">
        {/* Left Side */}
        <div className="flex items-center gap-1 flex-1">
          {expCategories.map((item) => (
            <button
              onClick={() => setFilter(item.category)}
              key={item.id}
              className={`h-8 px-3 ${filter === item.category ? "bg-indigo-500 text-white" : "bg-indigo-100/50 text-gray-500"} rounded-2xl text-xs capitalize whitespace-nowrap`}
            >
              {item.category}
            </button>
          ))}
        </div>

        {/* sort & clear expenses */}
        <div className="flex items-center gap-2 shrink-0">
          <select
            value={sorted}
            onChange={(e) => setSorted(e.target.value)}
            className="h-8 px-2 border border-gray-300 outline-none rounded-lg text-xs"
          >
            <option value={"Newest"}>Sort: Newest</option>
            <option value={"Oldest"}>Sort: Oldest</option>
            <option value={"Highest"}>Sort: Highest Amount</option>
            <option value={"Lowest"}>Sort: Lowest Amount</option>
            <option value={"az"}>Sort: A - Z</option>
            <option value={"za"}>Sort: Z - A</option>
          </select>

          <button
            onClick={() => {
              const confirmDelete = window.confirm(
                "Are you want to delete all expense?",
              );
              if (confirmDelete) clearAllExpenses();
            }}
            className="flex items-center justify-center h-8 px-2 bg-indigo-100/50 text-gray-500 rounded-2xl text-xs capitalize whitespace-nowrap"
          >
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  fill="currentColor"
                  d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"
                />
              </svg>
            </span>
            Clear All
          </button>
        </div>
      </div>
    </section>
  );
}
