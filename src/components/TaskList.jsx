import { useTasks } from "../contexts/TasksContext";
import Task from "./Task";

export default function TaskList() {
    const { tasks } = useTasks();

    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <Task task={task} />
                </li>
            ))}
        </ul>
    );
}
