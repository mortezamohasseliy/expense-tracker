import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import Statistics from "./components/Statistics";
import ExpenseList from "./components/ExpenseList";
import FilterBar from "./components/FilterBar";
import Header from "./components/Header";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState("All");
  const [sorted, setSorted] = useState("Newest");

  const filterExpenses =
    filter === "All"
      ? expenses
      : expenses.filter((item) => item.category === filter);

  const sortedExpenses = [...filterExpenses];

  if (sorted === "Newest") sortedExpenses.sort((a, b) => b.id - a.id);
  if (sorted === "Oldest") sortedExpenses.sort((a, b) => a.id - b.id);
  if (sorted === "Highest") sortedExpenses.sort((a, b) => b.amount - a.amount);
  if (sorted === "Lowest") sortedExpenses.sort((a, b) => a.amount - b.amount);
  if (sorted === "az")
    sortedExpenses.sort((a, b) => a.title.localeCompare(b.title));
  if (sorted === "za")
    sortedExpenses.sort((a, b) => b.title.localeCompare(a.title));

  function clearAllExpenses() {
    setExpenses([]);
  }

  return (
    <div className="w-200 min-h-screen  flex flex-col m-auto p-5">
      {/* Header */}
      <Header />
      {/* Statistics */}
      <Statistics expenses={expenses} />
      {/* Add Expense Section */}
      <ExpenseForm expenses={expenses} setExpenses={setExpenses} />
      {/* FilterBar */}
      <FilterBar
        filter={filter}
        setFilter={setFilter}
        sorted={sorted}
        setSorted={setSorted}
        clearAllExpenses={clearAllExpenses}
      />
      {/* ExpenseItem */}
      <ExpenseList expenses={sortedExpenses} setExpenses={setExpenses} />
    </div>
  );
}

export default App;
