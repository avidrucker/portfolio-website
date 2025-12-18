import { Link } from "react-router-dom";

function Header({ darkMode, setDarkMode, visitorCount }) {
  return (
    <header id="top" className="absolute top-0 w-100">
      <nav className="flex items-center justify-between ph4 pv3">
        <Link className={`lh-title responsive-name link ${darkMode ? " light " : " dark "}`} to="/">
          Avi Drucker
        </Link>
        <section className="flex flex-column flex-row-ns items-center justify-center">
        <p className={`ma0 o-80 f4 ml3 mr3-ns nowrap ${darkMode ? " light " : " dark "}`}>Visitors: {visitorCount}</p>
        <Link className="f3 link underline ml-auto mr3-ns" to="/contact">
          Contact
        </Link>
        <button
          className={`w4 ${darkMode ? " darker-bg light " : " light-bg darker "}`}
          onClick={() => setDarkMode(!darkMode)}
        >
          Lights {darkMode ? "off" : "on"}
        </button>
        </section>
      </nav>
    </header>
  );
}

export default Header;
