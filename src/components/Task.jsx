import { useTasks } from "../contexts/TasksContext";
import TaskContent from "./TaskContent";

export default function Task({ task }) {
    const { onChangeTask, onDeleteTask } = useTasks();

    return (
        <>
            <input
                type="checkbox"
                checked={task.done}
                onChange={(e) =>
                    onChangeTask({
                        ...task,
                        done: e.target.checked,
                    })
                }
            />
            <TaskContent task={task} />
            <button onClick={() => onDeleteTask(task.id)}>Delete</button>
        </>
    );
}
