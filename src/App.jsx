import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import SearchBar from './components/SearchBar';
import ExpenseTable from './components/ExpenseTable';

const App = () => {
    const [expenses, setExpenses] = useState([]);
    const [search, setSearch] = useState('');

    const handleAddExpense = (expense) => {
        setExpenses([...expenses, { ...expense, id: Date.now().toString() }]);
      };
      const handleDelete = (id) => {
        setExpenses(expenses.filter(exp => exp.id !== id));
      };

      const filteredExpenses = expenses.filter(
        (expense) =>
          expense.name.toLowerCase().includes(search.toLowerCase()) ||
          expense.description.toLowerCase().includes(search.toLowerCase())
      );
    
      return (
        <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
          <div className="w-full md:w-1/4 bg-white p-6 shadow">
            <h1 className="text-xl font-bold mb-4">Add Expense</h1>
            <ExpenseForm onAdd={handleAddExpense} />
          </div>
    
          <div className="w-full md:w-3/4 p-6">
            <SearchBar onSearch={setSearch} />
            <ExpenseTable expenses={filteredExpenses} />
          </div>
        </div>
      );
    };
    
    export default App;