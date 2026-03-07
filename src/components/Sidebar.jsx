import { useState } from "react";
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

  return (
    <>
      <button
        className={`menu-toggle ${isSidebarOpen ? "active" : ""}`}
        onClick={toggleSidebar}
        aria-label="Toggle sidebar"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        <div className="menu-item">HOME</div>

        <div className="menu-item" onClick={() => toggleMenu("applications")}>
          <span>APPLICATIONS</span>
          <span className="arrow">▼</span>
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
          <span className="arrow">▼</span>
        </div>
        {openMenu === "products" && (
          <div className="submenu">
            <div>Smart Film</div>
            <div>Smart Glass</div>
          </div>
        )}

        <div className="menu-item">NEWS</div>
        <div className="menu-item">ABOUT US</div>
        <div className="menu-item">CONTACT US</div>
      </div>
    </>
  );
}