import { Link } from "react-router-dom";

function HomePage({ darkMode }) {
  return (
    <main
      className={` min-h-100 flex flex-column ${
        darkMode ? " dark-bg light " : " light-bg dark "
      }`}
    >
      <section className={`first-page vh-100 flex flex-column justify-around items-center`}>
        <section className="jumbotron tc ph4">
          <h1 className="ma0 responsive-title">Software Expert</h1>
          <h2 className="ma0 f2 pt2 responsive-subtitle balance fw6">I help people solve real-world problems</h2>
        </section>
      </section>
      <section className={`second-page vh-100 flex flex-column justify-around items-center`}>
        <section className="projects">
          <h2 className="tc f2 ma0">Projects</h2>
          <ul className="list pl0 ml0 center mw6 ba b--blue br2">
            <Link to="/projects/web-map-app">
              <li className="ph3 pv3 bb b--blue">
                <strong className="b">Web Map App</strong>: Interactive mapping for everyone
              </li>
            </Link>
            <Link to="/projects/card-designer">
              <li className="ph3 pv3 bb b--blue">
                <strong className="b">Card Designer</strong>: Digital flashcard editing enhanced
              </li>
            </Link>
            <Link to="/projects/autofocus">
              <li className="ph3 pv3 bb b--blue">
                <strong className="b">AutoFocus</strong>: Productivity via radical simplicity
              </li>
            </Link>
            <Link to="/projects/treeswipe">
            <li className="ph3 pv3 bb b--blue">
              <strong className="b">TreeSwipe</strong>: A Chrome extension for Gmail
            </li>
            </Link>
            <Link to="/projects/lcc-js">
            <li className="ph3 pv3 bb b--blue">
              <strong className="b">LCC.js</strong>: Virtual assembler and interpreter
            </li>
            </Link>
          </ul>
        </section>
      </section>
    </main>
  );
}

export default HomePage;
