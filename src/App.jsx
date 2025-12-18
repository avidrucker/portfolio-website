import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";

// - [ ] move visitor count to the footer
// - [ ] make projects display be cards w/ links & short videos that play on hover
// - [ ] add contact info
// - [ ] make dark mode toggle be a sun/moon SVG icon
// - [ ] add a "back to top" button that smoothly scrolls up in the footer
// - [ ] add theme provider to toggle themes (this will replace the dark mode toggle)
// - [ ] store theme selection in local storage to use in "sibling apps" (like LCC Cloud)
// - [ ] store light/dark mode in local storage to persist across page loads

const BASE_URL = import.meta.env.VITE_API_URL || "/";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const storedMode = localStorage.getItem("darkMode");
    return storedMode ? JSON.parse(storedMode) : true;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  // Keep visitor count at app-level so Header can display it.
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    fetch(`${BASE_URL}api/count?type=json`)
      .then((response) => response.json())
      .then((data) => {
        setVisitorCount(data.count);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      fetch(`${BASE_URL}api/count?type=json&noincrement=true`)
        .then((response) => response.json())
        .then((data) => {
          if (data.count > visitorCount) {
            setVisitorCount(data.count);
          }
        })
        .catch(() => {});
    }, 5000);
    return () => clearInterval(interval);
  }, [visitorCount]);

  const [showUp, setShowUp] = useState(false);
  const [showDown, setShowDown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      setShowUp(scrollTop > 100);
      setShowDown(scrollTop < docHeight - windowHeight - 100);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <div className={`debug relative min-h-100 flex flex-column ${darkMode ? " dark-bg light " : " light-bg dark "}`}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} visitorCount={visitorCount} />

        <Routes>
          <Route path="/" element={<HomePage darkMode={darkMode} />} />
          <Route path="/projects/:projectId" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <Footer />

        {showUp && (
          <div
            className="scroll-indicator scroll-up"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ↑
          </div>
        )}
        {showDown && (
          <div
            className="scroll-indicator scroll-down"
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
          >
            ↓
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
