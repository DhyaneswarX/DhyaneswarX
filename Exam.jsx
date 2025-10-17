import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  // Handlers
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">React Counter</h1>

      <div className="text-5xl font-semibold mb-6 text-blue-600">{count}</div>

      <div className="flex gap-4">
        <button
          onClick={decrement}
          className="px-5 py-2 bg-red-500 text-white rounded-2xl shadow hover:bg-red-600 transition"
        >
          Decrement
        </button>
        <button
          onClick={reset}
          className="px-5 py-2 bg-gray-400 text-white rounded-2xl shadow hover:bg-gray-500 transition"
        >
          Reset
        </button>
        <button
          onClick={increment}
          className="px-5 py-2 bg-green-500 text-white rounded-2xl shadow hover:bg-green-600 transition"
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
