export default function taskReducer(draft, action) {
    switch (action.type) {
        case "added":
            draft.push({
                id: action.id,
                text: action.text,
                done: false,
            });
            break;
        case "changed": {
            const index = draft.findIndex((t) => t.id === action.task.id);
            draft[index].text = action.task.text;
            draft[index].done = action.task.done;

            break;
        }
        case "deleted":
            return draft.filter((t) => t.id !== action.id);

        default:
            throw new Error("No action mateched");
    }
}
