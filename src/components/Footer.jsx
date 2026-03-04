import { Link } from "react-router-dom";

function Footer({ darkMode }) {
  return (
    <footer
      className={`relative w-100 mt-auto ${
        darkMode ? "dark-surface-bg light" : "light-surface-bg dark"
      }`}
    >
      <nav className="flex items-center justify-between ph2 ph4-ns pv3">
        <p className="ma0 mr-auto">&copy; {new Date().getFullYear()} <span className="nowrap">Avi Drucker</span></p>
        <section className="flex flex-wrap items-center justify-end">
        <a
          aria-label="LinkedIn"
          className="f3 link ml2"
          href="https://linkedin.com/in/avidrucker"
          rel="noreferrer"
          target="_blank"
        >
          <i aria-hidden="true" className="fa fa-linkedin-square" />
        </a>
        <a
          aria-label="GitHub"
          className="f3 link ml2"
          href="https://github.com/avidrucker/"
          rel="noreferrer"
          target="_blank"
        >
          <i aria-hidden="true" className="fa fa-github" />
        </a>
        <a className="f3 link underline ml2" href="#top">
          Top
        </a>
        <Link className="f3 link underline ml2" to="/">
          Projects
        </Link>
        <Link className="f3 link underline ml2" to="/contact">
          Contact
        </Link>
        </section>
      </nav>
    </footer>
  );
}

export default Footer;
