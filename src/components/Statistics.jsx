export default function Statistics({ expenses }) {
  const total = expenses.length;
  let totalSpent = expenses.reduce((acc, cur) => {
    return acc + cur.amount;
  }, 0);
  let maxPrice =
    expenses.length > 0 ? Math.max(...expenses.map((item) => item.amount)) : 0;

  const categoryCount = new Set(expenses.map((expense) => expense.category))
    .size;

  const expensesLists = [
    {
      id: 0,
      expenseIcon: (
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
            stroke-width="2"
          >
            <path d="M12 17V7m4 1h-6a2 2 0 0 0 0 4h4a2 2 0 0 1 0 4H8" />
            <path d="M4 3a1 1 0 0 1 1-1a1.3 1.3 0 0 1 .7.2l.933.6a1.3 1.3 0 0 0 1.4 0l.934-.6a1.3 1.3 0 0 1 1.4 0l.933.6a1.3 1.3 0 0 0 1.4 0l.933-.6a1.3 1.3 0 0 1 1.4 0l.934.6a1.3 1.3 0 0 0 1.4 0l.933-.6A1.3 1.3 0 0 1 19 2a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1a1.3 1.3 0 0 1-.7-.2l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.934.6a1.3 1.3 0 0 1-1.4 0l-.933-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-1.4 0l-.934-.6a1.3 1.3 0 0 0-1.4 0l-.933.6a1.3 1.3 0 0 1-.7.2a1 1 0 0 1-1-1z" />
          </g>
        </svg>
      ),
      expenseStatus: total,
      expenseTitle: "total expenses",
    },
    {
      id: 1,
      expenseIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            fill="currentColor"
            d="M8 15.5H6c0 2.59 2.42 4.12 5 4.44V22h2v-2.07c2.25-.3 5-1.59 5-4.43s-2.75-4.13-5-4.43V6.1c1.33.24 3 .94 3 2.4h2c0-2.84-2.75-4.13-5-4.43V2h-2v2.07c-2.25.3-5 1.59-5 4.43s2.67 4.11 5 4.43v4.97c-1.45-.25-3-1.02-3-2.4m8 0c0 1.46-1.67 2.16-3 2.4v-4.8c1.33.24 3 .94 3 2.4m-8-7c0-1.46 1.67-2.16 3-2.4v4.8c-1.37-.25-3-1-3-2.4"
          />
        </svg>
      ),
      expenseStatus: `$${totalSpent}.00`,
      expenseTitle: "total spent",
    },
    {
      id: 2,
      expenseIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            fill="currentColor"
            d="M3.4 18L2 16.6l7.4-7.45l4 4L18.6 8H16V6h6v6h-2V9.4L13.4 16l-4-4z"
          />
        </svg>
      ),
      expenseStatus: `$${maxPrice}.00`,
      expenseTitle: "heighest expense",
    },
    {
      id: 3,
      expenseIcon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            fill="currentColor"
            d="m21.49 7.13l-9-5a.99.99 0 0 0-.97 0l-9.01 5C2.19 7.31 2 7.64 2 8s.2.7.51.87l9 5c.15.08.32.13.49.13s.33-.04.49-.13l9-5c.32-.18.51-.51.51-.87s-.2-.7-.51-.87M12 11.86L5.06 8L12 4.14L18.94 8z"
          />
          <path
            fill="currentColor"
            d="M12 18c.17 0 .33-.04.49-.13l9-5l-.97-1.75l-8.51 4.73l-8.52-4.72l-.97 1.75l9 5c.15.08.32.13.49.13Z"
          />
          <path
            fill="currentColor"
            d="M11.51 21.87c.15.08.32.13.49.13s.33-.04.49-.13l9-5l-.97-1.75l-8.51 4.73l-8.52-4.72l-.97 1.75l9 5Z"
          />
        </svg>
      ),
      expenseStatus: categoryCount,
      expenseTitle: "categories used",
    },
  ];

  return (
    <section className="w-full h-40 space-x-5 text-left mt-10 flex">
      {expensesLists.map((item) => (
        <div
          key={item.id}
          className="w-50 h-30 flex flex-col items-center justify-center rounded-lg p-2 bg-white shadow"
        >
          <div className="w-12.5 h-13 bg-gray-50 flex justify-center items-center rounded-full text-indigo-500">
            {item.expenseIcon}
          </div>
          <h1 className="text-lg font-bold">{item.expenseStatus}</h1>
          <p className="uppercase text-gray-400">{item.expenseTitle}</p>
        </div>
      ))}
    </section>
  );
}
