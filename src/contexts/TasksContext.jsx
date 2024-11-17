import { createContext, useContext } from "react";
import { useImmerReducer } from "use-immer";
import { initialTasks } from "../data/initialTasks";
import taskReducer from "../reducers/taskReducer";

export const TasksContext = createContext(null);

let nextId = 4;

export default function TaskProvider({ children }) {
    const [tasks, dispatch] = useImmerReducer(taskReducer, initialTasks);

    const handleAddTask = (text) => {
        dispatch({
            type: "added",
            text,
            id: nextId++,
        });
    };

    const handleChangeTask = (task) => {
        dispatch({
            type: "changed",
            task,
        });
    };

    const handleDeleteTask = (taskId) => {
        dispatch({
            type: "deleted",
            id: taskId,
        });
    };

    return (
        <TasksContext.Provider
            value={{
                tasks,
                onAddTask: handleAddTask,
                onChangeTask: handleChangeTask,
                onDeleteTask: handleDeleteTask,
            }}
        >
            {children}
        </TasksContext.Provider>
    );
}

export const useTasks = () => {
    return useContext(TasksContext);
};
