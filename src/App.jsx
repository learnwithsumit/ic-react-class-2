import "./App.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import TaskProvider from "./contexts/TasksContext";

function App() {
    return (
        <div>
            <h1>Simple Todo App</h1>
            <TaskProvider>
                <AddTask />
                <TaskList />
            </TaskProvider>
        </div>
    );
}

export default App;
