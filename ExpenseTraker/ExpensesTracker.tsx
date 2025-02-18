import { useStore } from "./store";
import { useState } from "react";

const ExpensesTracker = () => {
  const { expenses, addExpense, removeExpense } = useStore();
  const [desc, setDesc] = useState<string>("");
  const [amount, setAmount] = useState<number | "">("");

  function handelAdd() {
    if (desc.trim() === "" || amount === "") {
      return;
    }
    addExpense({
      id: Date.now(),
      desc,
      amount: Number(amount),
    });
    setDesc("");
    setAmount("");
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">
          Expanse Tracker
        </h1>
        <div className="the form space-y-4 mb-6">
          <input
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            type="text"
            placeholder="Expense describtion"
            className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            value={amount}
            onChange={(e) =>
              setAmount(e.target.value === "" ? "" : Number(e.target.value))
            }
            type="number"
            placeholder="Expense Amount"
            className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={handelAdd}
            className="bg-blue-500 text-white w-full px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add
          </button>
        </div>

        <ul>
          {expenses.map((expense) => (
            <li
              className="flex mb-5 justify-between items-center bg-blue-50 p-4 rounded-lg shadow-sm"
              key={expense.id}
            >
              <span className="text-gray-700">
                {expense.desc}: ${expense.amount.toFixed(2)}
              </span>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                onClick={() => removeExpense(expense.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-blue-800">
            Total Expense: $
            {expenses
              .reduce((total, expense) => total + expense.amount, 0)
              .toFixed(2)}
          </h2>
        </div>


      </div>
    </div>
  );
};

export default ExpensesTracker;
