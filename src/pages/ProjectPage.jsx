import { useParams, Link } from "react-router-dom";

const PROJECTS = {
  "card-designer": {
    title: "Card Designer",
    desc: "Digital flashcard editing enhanced",
  },
  autofocus: {
    title: "AutoFocus",
    desc: "Productivity via radical simplicity",
  },
  treeswipe: {
    title: "TreeSwipe",
    desc: "A Chrome extension for Gmail",
  },
  "lcc-cloud": {
    title: "LCC Cloud",
    desc: "Assembly in the cloud",
  },
  "web-map-app": {
    title: "Web Map App",
    desc: "Interactive mapping for everyone",
    github: "https://github.com/avidrucker/ship-log-map",
    app: "https://avidrucker.github.io/ship-log-map/",
    long: "I built this PWA to enable people to create, edit, and share their own interactive maps with custom markers and data layers. Built with React, Cytoscape, and Tachyons.",
  },
};

function ProjectPage() {
  const { projectId } = useParams();
  const project = PROJECTS[projectId];

  if (!project) {
    return (
      <div className="ph4 pv5 tc">
        <h2>Project not found</h2>
        <p>
          <Link to="/">Return home</Link>
        </p>
      </div>
    );
  }

  return (
    <main className="first-page pv6 min-vh-100">
      <section className="flex flex-column items-center ph4 pt3">
      <h1 className="ma0 tc">{project.title}</h1>
      <p className="o-80 ma0 pv2">{project.desc}</p>
      {project.github && (
        <p className="ma0 pv2">
          <a href={project.github} target="_blank" rel="noopener noreferrer"> 
            View on GitHub
          </a>
        </p>
      )}
      {project.app && (
        <p className="ma0 pv2">
          <a href={project.app} target="_blank" rel="noopener noreferrer"> 
            Launch the App
          </a>
        </p>
      )}
      {project.long && <p className="ma0 pv2 measure balance tc">{project.long}</p>}
      <p className="ma0 pv2">
        <Link to="/">Back to Home</Link>
      </p>
      </section>
    </main>
  );
}

export default ProjectPage;
