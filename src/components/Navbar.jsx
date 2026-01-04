import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/courses">Course Management Application
</Link>
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        <div className={`navbar-links ${open ? "open" : ""}`}>
          <Link to="/courses" onClick={() => setOpen(false)}>
            Courses
          </Link>
          <Link to="/add-course" onClick={() => setOpen(false)}>
            Add Course
          </Link>
          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
