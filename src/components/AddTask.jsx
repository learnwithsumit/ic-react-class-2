import { useState } from "react";
import { useTasks } from "../contexts/TasksContext";

export default function AddTask() {
    const [text, setText] = useState("");
    const { onAddTask } = useTasks();

    return (
        <>
            <input
                type="text"
                placeholder="Add Task"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button
                onClick={() => {
                    setText("");
                    onAddTask(text);
                }}
            >
                Add
            </button>
        </>
    );
}
