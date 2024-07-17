import { useState, useEffect } from "react";
import "./App.css";

const BASE_URL = import.meta.env.VITE_API_URL || "/";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  // query /api/count?type=json to get the visitor count using fetch and GET
  const [visitorCount, setVisitorCount] = useState(0);
  
  // load the correct visitor count on initial page load
  useEffect(() => {
    fetch(`${BASE_URL}api/count?type=json`)
      .then((response) => response.json())
      .then((data) => {
        setVisitorCount(data.count);
      });
    }, []);

  // check visitor count and update it if has increased
  useEffect(() => {
    const interval = setInterval(() => {
      fetch(`${BASE_URL}api/count?type=json&noincrement=true`)
        .then((response) => response.json())
        .then((data) => {
          if (data.count > visitorCount) {
            setVisitorCount(data.count);
          }
        });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main
      className={`min-h-100 flex flex-column ${
        darkMode ? " dark-bg light " : " light-bg dark "
      }`}
    >
      <section className="first-page vh-100 flex flex-column justify-between">
        <header>
          <nav className="flex items-center justify-between ph4 pv3">
            <a className={`f2 link ${darkMode ? " light " : " dark "}`} href="#">
              Avi Drucker
            </a>
            <p className="ma0 o-50">Visitor Count: {visitorCount}</p>
            <a className="f3 link underline ml-auto mr3" href="#">
              Contact
            </a>
            <button
              className={`w4 ${
                darkMode ? " darker-bg light " : " light-bg darker "
              }`}
              onClick={() => setDarkMode(!darkMode)}
            >
              Lights {darkMode ? "off" : "on"}
            </button>
          </nav>
        </header>
          <section className="jumbotron tc">
            <h1>Software Expert</h1>
            <h2>I help people solve real-world problems... for <strong>cheese</strong> 🧀</h2>
          </section>
          <section className="projects">
            {/* remove next h2 from screenreaders */}
            <h2 className="w0 h0 o-0">End of Jumbotron</h2>
          </section>
      </section>
        <section className="second-page vh-100 flex flex-column justify-between">
          <section className="projects">
            <ul className="list pl0 ml0 center mw6 ba b--blue br2">
              <li className="ph3 pv3 bb b--blue">Card Designer</li>
              <li className="ph3 pv3 bb b--blue">AutoFocus</li>
              <li className="ph3 pv3 bb b--blue">TreeSwipe</li>
              <li className="ph3 pv3 bb b--blue">LCC Cloud</li>
              <li className="ph3 pv3 bb b--blue">My Portfolio Site</li>
            </ul>
          </section>
        </section>
      <footer>
        <nav className="flex items-center justify-between ph4 pv3">
          <p className="ma0 mr-auto">
            &copy; {new Date().getFullYear()} Avi Drucker
          </p>
          <a className="f3 link underline ml2" href="#">
            Top
          </a>
          <a className="f3 link underline ml2" href="#">
            Projects
          </a>
          <a className="f3 link underline ml2" href="#">
            Contact
          </a>
        </nav>
      </footer>
    </main>
  );
}

export default App;
