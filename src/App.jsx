import { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);

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
            <h2>I help people solve real-world problems... for <strong>money</strong> 😉</h2>
          </section>
          <section className="projects">
            {/* remove next h2 from screenreaders */}
            <h2 className="w0 h0 o-0">End of Jumbotron</h2>
          </section>
      </section>
        <section className="second-page vh-100 flex flex-column justify-between">
          <section className="projects">
            <ul>
              <li>Card Designer</li>
              <li>AutoFocus</li>
              <li>TreeSwipe</li>
              <li>LCC Cloud</li>
              <li>My Portfolio Site</li>
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
