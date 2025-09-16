
import Task from "./Tasks";

export default function SelectedProject({
    project,
    onDelete,
    onAddTask,
    onDeleteTask,
    tasks
}) {

    const formatDate = new Date(project.dueDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="flex-1 p-8 bg-white text-stone-800">
            <header className="border-b border-stone-300 pb-4 mb-6">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold">{project.title}</h1>
                    <button onClick={onDelete}
                        className="px-4 py-2 text-sm rounded-md bg-stone-800 text-white hover:bg-stone-900">
                        Delete
                    </button>
                </div>
                <p className="text-stone-500 mt-2">{formatDate}</p>
                <p className="mt-4 text-stone-700 whitespace-pre-wrap">{project.description}</p>
            </header>
            <Task onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
        </div>
    );
}
