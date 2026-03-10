import { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setOpenMenu(null);
  };

  return (
    <>
      {isSidebarOpen && (
        <div className="sidebar-backdrop" onClick={closeSidebar}></div>
      )}

      <button
        className={`menu-toggle ${isSidebarOpen ? "active" : ""}`}
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <Link to="/" className="menu-item" onClick={closeSidebar}>
          <span>HOME</span>
        </Link>

        <div className="menu-item" onClick={() => toggleMenu("applications")}>
          <span>APPLICATIONS</span>
          <span
            className={`arrow ${
              openMenu === "applications" ? "arrow-open" : ""
            }`}
          >
            ▼
          </span>
        </div>
        {openMenu === "applications" && (
          <div className="submenu">
            <div>Automotive</div>
            <div>Architecture</div>
            <div>Commercial</div>
          </div>
        )}

        <div className="menu-item" onClick={() => toggleMenu("products")}>
          <span>PRODUCTS</span>
          <span
            className={`arrow ${openMenu === "products" ? "arrow-open" : ""}`}
          >
            ▼
          </span>
        </div>
        {openMenu === "products" && (
          <div className="submenu">
            <div>Smart Film</div>
            <div>Smart Glass</div>
          </div>
        )}

        <Link to="/news" className="menu-item" onClick={closeSidebar}>
          <span>NEWS</span>
        </Link>

        <div className="menu-item" onClick={closeSidebar}>
          <span>ABOUT US</span>
        </div>

        <Link to="/contact" className="menu-item" onClick={closeSidebar}>
          <span>CONTACT US</span>
        </Link>
      </div>
    </>
  );
}