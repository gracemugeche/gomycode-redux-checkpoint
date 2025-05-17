import React,{ useState } from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

const ListTask = () => {
  const tasks = useSelector((state) => state.todos);
  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'done') return task.isDone;
    if (filter === 'not') return !task.isDone;
    return true;
  });

  return (
    <div>
      <div className="flex justify-center gap-2 mb-4">
        <button onClick={() => setFilter('all')} className="px-3 py-1 border rounded">All</button>
        <button onClick={() => setFilter('done')} className="px-3 py-1 border rounded">Done</button>
        <button onClick={() => setFilter('not')} className="px-3 py-1 border rounded">Not Done</button>
      </div>

      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;

