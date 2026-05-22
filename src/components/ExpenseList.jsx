export default function ExpenseList({ expenses, setExpenses }) {
  function clearItem(id) {
    const deleteItem = expenses.filter((item) => item.id !== id);
    setExpenses(deleteItem);
  }

  function getCategoryStyle(category) {
    switch (category) {
      case "Food":
        return "bg-yellow-100 text-yellow-700";

      case "Transport":
        return "bg-blue-100 text-blue-700";

      case "Shopping":
        return "bg-green-100 text-green-700";

      case "Bills":
        return "bg-red-100 text-red-700";

      case "Entertainment":
        return "bg-purple-100 text-purple-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  }

  return (
    <section className="w-full h-auto flex flex-col space-y-3 mt-5 bg-white">
      {expenses.length === 0 ? (
        <div className="text-center text-gray-400 flex flex-col items-center justify-center space-y-3">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <g
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              >
                <path d="M17.25 21.75h-6m-2.5-8.5h6.5m-6.5-3.5h6.5m-6.5-3.5h6.5m5-5.5h-1.5v5.5h4.5v-2.5a3 3 0 0 0-3-3" />
                <path d="M13.5 17.25H3.75a3 3 0 0 0-3 3v3h10.5V19.5a2.25 2.25 0 0 1 2.25-2.25m0 0a2.25 2.25 0 0 1 2.25 2.25v.75a1.5 1.5 0 1 0 3 0V.75H8.25a3 3 0 0 0-3 3v13.5" />
              </g>
            </svg>
          </span>
          <p className="text-lg font-bold text-black"> No expenses yet</p>
          <p>add your first expense to get started</p>
        </div>
      ) : (
        expenses.map((item) => (
          <div
            key={item.id}
            className="group w-full flex items-center justify-between px-10 bg-white h-12 rounded-2xl shadow"
          >
            <div className="flex items-center justify-start space-x-3">
              <div
                className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryStyle(
                  item.category,
                )}`}
              >
                {item.category}
              </div>
              <div>{item.title}</div>
            </div>

            <div className="flex items-center justify-start space-x-5">
              <div>${item.amount}.00</div>

              <button
                onClick={() => clearItem(item.id)}
                className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-red-500 font-bold"
              >
                x
              </button>
            </div>
          </div>
        ))
      )}
    </section>
  );
}
