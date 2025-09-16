
import Button from "./Button";

// sidebar on left
export default function Dashboard({ onStartAddProject, projects = [], onSelectProject }) {
  return (
    <aside id="dashboard"
      className="w-80 flex-shrink-0 min-h-screen bg-black/90 text-white rounded-tr-4xl px-6 py-8 mt-16">
      <h2 className="text-2xl font-bold tracking-widest mb-6">YOUR PROJECTS</h2>

      <Button onClick={onStartAddProject}>
        + Add Project
      </Button>


      <ul className="space-mt-6">
        {projects.length === 0 ? (
          <li className="text-gray-400">No projects yet - Create one</li>
        ) : (
          projects.map((p) => (
            <li key={p.id} className="px-3 py-2 rounded-md hover:bg-white/5 cursor-pointer"
              onClick={() => onSelectProject(p.id)}>
              {p.title ?? p}
            </li>
          ))
        )}
      </ul>

    </aside>
  );
}
