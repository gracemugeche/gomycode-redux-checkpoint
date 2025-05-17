import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import { addTodo } from '../redux/todoSlice';

const AddTask =() =>{
  const[value,setValue] =useState('');
  const dispatch = useDispatch();

  
  const handleAdd = () => {
    if (value.trim()) {
      dispatch(addTodo({ description: value }));
      setValue('');
    }
  };

  return (
   <div className="bg-white shadow-md p-4 rounded-md flex gap-3 mb-6">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a task"
        className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
