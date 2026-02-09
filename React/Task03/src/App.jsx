import React, { useState } from 'react'

const App = () => {

  const [item, setItem] = useState('');
  const [list, setList] = useState([]);

  function submitHandler(e) {
    e.preventDefault();

    if (!item.trim()) return;

    // Add item safely
    setList(prevList => [...prevList, item]);

    // Clear input
    setItem('');
  }

  return (
    <div className="container h-screen w-full bg-slate-900 flex items-center justify-center">
      <div className="form px-5 py-5 bg-white rounded-md text-center w-200">
        <h1 className='text-3xl font-bold mb-5'>TO DO LIST</h1>

        <form onSubmit={submitHandler}>
          <input
            onChange={(e) => setItem(e.target.value)}
            value={item}
            type="text"
            placeholder="Type Here....."
            className="px-5 py-3 text-slate-800 border italic mr-5 rounded-md w-100"
          />

          <button className='px-4 py-3 bg-blue-700 border rounded-md text-white font-bold'>
            Add
          </button>
        </form>

        {/* Render List */}
        <div className="itemContainer text-center italic text-2xl my-5">
          {list.map((todo, index) => (
            <h1 key={index} className='my-2 bg-slate-100'>
              {todo}
            </h1>
          ))}
        </div>

      </div>
    </div>
  )
}

export default App;
