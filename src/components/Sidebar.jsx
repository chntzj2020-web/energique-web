import { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setIsServicesOpen(false);
  };

  const toggleServices = () => {
    setIsServicesOpen((prev) => !prev);
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
          HOME
        </Link>

        <div className="menu-group">
          <button
            className={`menu-item menu-item-button ${
              isServicesOpen ? "expanded" : ""
            }`}
            onClick={toggleServices}
            type="button"
          >
            <span>OUR SERVICES</span>
            <span className={`arrow ${isServicesOpen ? "open" : ""}`}>▾</span>
          </button>

          <div className={`submenu ${isServicesOpen ? "open" : ""}`}>
            <Link
              to="/our-services#smart-film"
              className="submenu-item"
              onClick={closeSidebar}
            >
              Smart Film Solutions
            </Link>

            <Link
              to="/our-services#solar-energy"
              className="submenu-item"
              onClick={closeSidebar}
            >
              Solar & Energy Solutions
            </Link>

            <Link
              to="/our-services#advisory-partnerships"
              className="submenu-item"
              onClick={closeSidebar}
            >
              Advisory & Partnerships
            </Link>
          </div>
        </div>

        <Link to="/products" className="menu-item" onClick={closeSidebar}>
          PRODUCTS
        </Link>

        <Link to="/about" className="menu-item" onClick={closeSidebar}>
          ABOUT US
        </Link>

        <Link to="/contact" className="menu-item" onClick={closeSidebar}>
          CONTACT US
        </Link>
      </div>
    </>
  );
}