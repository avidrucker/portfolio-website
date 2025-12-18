import { useParams, Link } from "react-router-dom";

const PROJECTS = {
  "card-designer": {
    title: "Card Designer",
    desc: "Digital flashcard editing enhanced",
    github: "https://github.com/avidrucker/anki-card-test-1",
    app: "https://avidrucker.github.io/anki-card-test-1/",
    long: "I created this web app to simplify the process of designing and previewing digital flashcards for Anki. Built with React and Tachyons.",
  },
  autofocus: {
    title: "AutoFocus",
    desc: "Productivity via radical simplicity",
    github: "https://github.com/avidrucker/pwa-autofocus-app",
    app: "https://avidrucker.github.io/pwa-autofocus-app/",
    long: "I developed this progressive web app to help people boost productivity through simplicity. It leverages the AutoFocus task management algorithm (originally designed by Mark Forster). Built with React and Tachyons CSS and designed for both desktop and mobile use.",
  },
  treeswipe: {
    title: "TreeSwipe",
    desc: "A Chrome extension for Gmail",
    github: "https://github.com/avidrucker/tree-swipe/",
    app: "https://chromewebstore.google.com/detail/tree-swipe/hlpelbabphidmofbjcijjjkagolaebjl?hl=en",
    long: "I built TreeSwipe to enhance email management in Gmail by allowing users to quickly archive or delete emails with simple keyboard shortcuts. Developed as a Chrome extension using JavaScript and the Gmail API.",
  },
  "lcc-js": {
    title: "LCC.js",
    desc: "Virtual assembler and interpreter",
    github: "https://github.com/avidrucker/lccjs/",
    app: "https://hydra.newpaltz.edu/lccjs/",
    long: "I built LCC.js to provide a console-based environment for assembling and interpreting LCC assembly language programs. Built with JavaScript and NodeJS.",
  },
  "web-map-app": {
    title: "Web Map App",
    desc: "Interactive mapping for everyone",
    github: "https://github.com/avidrucker/ship-log-map",
    app: "https://avidrucker.github.io/ship-log-map/",
    long: "I built this PWA to enable people to create, edit, and share their own interactive maps with custom markers and data layers. Built with React, Cytoscape, and Tachyons CSS.",
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
