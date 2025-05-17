import AddTask from "./Components/AddTask";
import ListTask from "./Components/ListTask";


function App() {
  return (
    <div  className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-4">ToDo App</h1>
      <AddTask />
      <ListTask />
    </div>
  );
}

export default App;
