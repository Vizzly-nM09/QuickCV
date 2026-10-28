import { Link, useLocation } from "react-router-dom";
import { FileText } from "lucide-react";

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="brand-logo">
          <FileText size={20} className="brand-icon" />
          <span>QuickCV</span>
        </Link>
      </div>

      <div className="navbar-links">
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          Home
        </Link>
        <Link
          to="/builder"
          className={
            location.pathname === "/builder" ? "nav-link active" : "nav-link"
          }
        >
          Builder
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
