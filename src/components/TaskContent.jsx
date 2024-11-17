import { useState } from "react";
import { useTasks } from "../contexts/TasksContext";

export default function TaskContent({ task }) {
    const [isEditing, setIsEditing] = useState(false);
    const { onChangeTask } = useTasks();

    return isEditing ? (
        <>
            <input
                type="text"
                value={task.text}
                onChange={(e) =>
                    onChangeTask({
                        ...task,
                        text: e.target.value,
                    })
                }
            />
            <button onClick={() => setIsEditing(false)}>Save</button>
        </>
    ) : (
        <>
            {task.text}
            <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
    );
}
