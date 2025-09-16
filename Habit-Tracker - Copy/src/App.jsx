import { useState } from 'react'
import './index.css'
import Dashboard from './Components/Dashboard'
import Page from './Components/Page'
import NewProject from './Components/NewProject'
import SelectedProject from './Components/Selectedproject'

function App() {
  const [projectstate, setProjectstate] = useState({
    selectedProject: undefined, // undefined = landing Page, null = add mode, id = selected project
    projects: [],
    tasks: []
  })

  function handleAddTask(text) {
    setProjectstate(prevState => {
      const taskId = Math.random(); // or crypto.randomUUID()
      const newTask = {
        text,
        projectId: prevState.selectedProject, // tie to current project
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };

    })
  };

  function handlDeleteTask(taskId) {
    setProjectstate(prevState => ({
      ...prevState,
      tasks: prevState.tasks.filter(task => task.id !== taskId),
    }));
  };


  function handleCancelProject() {
    setProjectstate(prevState => ({
      ...prevState,
      selectedProject: undefined,
    }));
  }

  function handleStartAddProject() {
    setProjectstate(prevState => ({
      ...prevState,
      selectedProject: null,
    }));
  }


  function handleSelectProject(id) {
    setProjectstate(prevState => ({
      ...prevState,
      selectedProject: id,
    }));
  }

  function handleAddProject(projectData) {
    setProjectstate(prevState => {
      const projectId = crypto.randomUUID(); // ok for demo; prefer uuid in real apps
      const newProject = {
        ...projectData,
        id: projectId
      };

      return {
        ...prevState,
        selectedProject: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }


  const selectedProject = projectstate.projects.find(p => p.id === projectstate.selectedProject);

  let content;
  if (projectstate.selectedProject === null) {
    content = <NewProject onAdd={handleAddProject}
      onCancel={handleCancelProject}
    />
  } else if (projectstate.selectedProject === undefined) {
    content = <Page onStartAddProject={handleStartAddProject} />;
  } else {

    content = selectedProject ? (
      <SelectedProject
        project={selectedProject}
        onDelete={handleDeleteProject}
        onAddTask={handleAddTask}
        onDeleteTask={handlDeleteTask}
        tasks={projectstate.tasks.filter(task => task.projectId === selectedProject.id)}
      />
    ) : (
      <div className="flex-1 p-8">Project not found.</div>
    );
  }
  function handleDeleteProject() {
    setProjectstate((prevState) => {
      return {
        ...prevState,
        selectedProject: undefined,
        projects: prevState.projects.filter((p) => p.id !== prevState.selectedProject),
      };
    })
  };



  return (
    <>
      <main className='min-h-screen flex flex-row'>
        <Dashboard
          onStartAddProject={handleStartAddProject}
          projects={projectstate.projects}
          onSelectProject={handleSelectProject}
        />
        {content}
      </main>
    </>
  )
}

export default App;


