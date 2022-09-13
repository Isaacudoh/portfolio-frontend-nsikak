import { useState, useEffect} from "react";

function Projects(props) {
  // create state to hold projects
  const [projects, setProjects] = useState();

  // Function to make api call
  const getProjectsData = async () => {
    // make api call and get response
    const response = await fetch(props.URL + "projects");

    // turn response into javascript object
    const data = await response.json();

    // set the about state to the data
    setProjects(data);
  };

  // initial call for data inside useEffect, so it only happens once
  useEffect(() => {
    getProjectsData();
  }, []);

  // define function to that will return JSX needed once we get the data
  const loaded = () => {
    return projects.map ((project)=>(
      <div>
        <h1>{project.name}</h1>
        <img src={project.image}/>
        <a href={project.git}>
          <button>Github </button>
        </a>
        <a href={project.live}>
          <button>live site</button>
        </a>
      </div>
    ))
  };

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return projects ? loaded () : <h1>Loading....</h1>
}

export default Projects;