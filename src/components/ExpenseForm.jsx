// src/components/ExpenseForm.js
import React, { useState } from 'react';

const ExpenseForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    amount: '',
    category: '',
    date: ''
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(form);
    setForm({ name: '', description: '', amount: '', category: '', date: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        name="name"
        placeholder="Expense name"
        className="w-full p-2 border rounded"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        name="description"
        placeholder="Description"
        className="w-full p-2 border rounded"
        value={form.description}
        onChange={handleChange}
        required
      />
      <input
        name="category"
        placeholder="Category"
        className="w-full p-2 border rounded"
        value={form.category}
        onChange={handleChange}
        required
      />
      <input
        name="amount"
        placeholder="Amount"
        type="number"
        className="w-full p-2 border rounded"
        value={form.amount}
        onChange={handleChange}
        required
      />
      <input
        name="date"
        type="date"
        className="w-full p-2 border rounded"
        value={form.date}
        onChange={handleChange}
        required
      />
      <button
        type="submit"
        className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
      >
        Submit
      </button>
    </form>
  );
};

export default ExpenseForm;
