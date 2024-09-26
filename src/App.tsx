// src/App.js

import React, { useState } from 'react';

function App() {
  const [chores, setChores] = useState([]);
  const [inputValue, setInputValue] = useState('');

  //menambah chore
  const addChore = () => {
    if (inputValue.trim()) {
      setChores([...chores, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  //menghapus chore
  const removeChore = (index) => {
    setChores(chores.filter((_, i) => i !== index));
  };

  //menampilkan chore
  const toggleChoreCompletion = (index) => {
    setChores(
      chores.map((chore, i) => 
        i === index ? { ...chore, completed: !chore.completed } : chore
      )
    );
  };

  const totalChores = chores.length;
  const completedChores = chores.filter(chore => chore.completed).length;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-md">
        <h1 className="text-xl text-center font-bold mb-4 card">Chore To-Do List</h1>

        {totalChores === 0 ? (
          
          <p className="text-gray-500 text-center mb-4">No tasks available. Please add a chore.</p>
        ) : (
          <ul className="list-disc mb-4">
          {chores.map((chore, index) => (
            <li key={index} className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={chore.completed}
                  onChange={() => toggleChoreCompletion(index)}
                  className="mr-2"
                />
                <span className={chore.completed ? 'line-through text-gray-500' : ''}>
                  {chore.text}
                </span>
              </div>
              <button
                onClick={() => removeChore(index)}
                className="text-red-500 hover:text-red-700"
              >
                {/* remove icon */}
                <div class="border-2 rounded p-1 border-rose-500 ...">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
                </div>

              </button>
            </li>
          ))}
        </ul>
        )}
       
        <hr />
        <div className="pt-4">
          <p>Add Todo</p>
        </div>
        
        <div className="flex mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="border border-gray-300 rounded-l-md p-2 flex-1"
            placeholder="Add a new chore"
          />
          <button
            onClick={addChore}
            className="bg-blue-500 text-white rounded-r-md p-2 hover:bg-blue-600 flex"
          >
            <div className="mr-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </div>

            Add
          </button>
        </div>
        

        <div className="mt-4">
          <p className="font-medium">
            Total Chores: {totalChores} | Completed: {completedChores}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
