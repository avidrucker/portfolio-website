import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="absolute bottom-0 w-100">
      <nav className="flex items-center justify-between ph4 pv3">
        <p className="ma0 mr-auto">&copy; {new Date().getFullYear()} <span className="nowrap">Avi Drucker</span></p>
        <section className="flex flex-wrap justify-end">
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
