import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleDone, editTodo } from '../redux/todoSlice';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [newDesc, setNewDesc] = useState(task.description);

  const handleSave = () => {
    if (newDesc.trim()) {
      dispatch(editTodo({ id: task.id, description: newDesc }));
      setEditMode(false);
    }
  };

  return (
    <div className="bg-white shadow p-4 rounded mb-3 flex justify-between items-center">
      <div className="flex-1">
        {editMode ? (
          <input
            value={newDesc}
            onChange={(e) => setNewDesc(e.target.value)}
            className="w-full border p-2 rounded"
          />
        ) : (
          <p className={task.isDone ? "line-through text-gray-400" : ""}>
            {task.description}
          </p>
        )}
      </div>

      <div className="flex gap-2 ml-4">
        <button
          onClick={() => dispatch(toggleDone(task.id))}
          className="text-xs px-3 py-1 rounded bg-green-100 hover:bg-green-200"
        >
          {task.isDone ? "Not done" : "Done"}
        </button>

        {editMode ? (
          <button
            onClick={handleSave}
            className="text-xs px-3 py-1 rounded bg-blue-100 hover:bg-blue-200"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setEditMode(true)}
            className="text-xs px-3 py-1 rounded bg-yellow-100 hover:bg-yellow-200"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default Task;


