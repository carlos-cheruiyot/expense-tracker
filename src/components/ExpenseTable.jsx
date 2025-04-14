// src/components/ExpenseTable.js
import React from 'react';

const ExpenseTable = ({ expenses, onDelete, onSort }) => {
  return (
    <table className="w-full border-collapse bg-white shadow-md">
      <thead className="bg-black text-white">
        <tr>
          <th className="p-3 text-left">Name</th>
          <th className="p-3 text-left">Description
          <button onClick={() => onSort('description')} className="ml-1 text-xs">↕</button>
          </th>
          
          <th className="p-3 text-left">Category
          <button onClick={() => onSort('category')} className="ml-1 text-xs">↕</button>
          </th>
          
          <th className="p-3 text-left">Amount</th>
          <th className="p-3 text-left">Date</th>
          <th className="p-3 text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((exp) => (
          <tr key={exp.id} className="border-t hover:bg-gray-100">
            <td className="p-3">{exp.name}</td>
            <td className="p-3">{exp.description}</td>
            <td className="p-3">{exp.category}</td>
            <td className="p-3">${exp.amount}</td>
            <td className="p-3">{exp.date}

            <button
                onClick={() => onDelete(exp.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseTable;
