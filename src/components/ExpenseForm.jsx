import { useState } from "react";

export default function ExpenseForm({ expenses, setExpenses }) {
  const [expense, setExpense] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Food");

  function handleSubmit() {
    if (expense.trim() === "" || Number(price) <= 0) return;

    const newExpense = {
      id: Date.now(),
      title: expense,
      amount: Number(price),
      category: category,
    };

    setExpenses([...expenses, newExpense]);

    setExpense("");
    setPrice("");
    setCategory("Food");
  }

  return (
    <section className="w-full h-30 space-x-5 text-left shadow rounded-lg px-3">
      <h1 className="font-bold">Add expense</h1>

      <div className="w-full flex items-center justify-between mt-3 space-x-3">
        <input
          onChange={(e) => setExpense(e.target.value)}
          value={expense}
          placeholder="e.g Coffee with friends"
          className="w-50 h-10 px-3 bg-white border border-gray-300 focus:outline-2 focus:outline-indigo-500 rounded-2xl"
        />

        <input
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          type="number"
          placeholder="Amount"
          className="w-50 h-10 px-3 bg-white border border-gray-300 focus:outline-2 focus:outline-indigo-500 rounded-2xl"
        />

        <select
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          className="w-50 h-10 px-3 bg-white border border-gray-300 focus:outline-2 focus:outline-indigo-500 rounded-2xl"
        >
          <option value="Food">Food</option>
          <option value="Transport">Transport</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Shopping">Shopping</option>
          <option value="Bills">Bills</option>
          <option value="Other">Other</option>
        </select>

        <button
          onClick={handleSubmit}
          className="w-20 h-10 bg-indigo-500 text-white uppercase rounded-2xl"
        >
          + Add
        </button>
      </div>
    </section>
  );
}
