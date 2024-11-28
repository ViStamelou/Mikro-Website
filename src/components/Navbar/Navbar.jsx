import { useState } from "react";
import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <NavLink className={styles.title} to="/mikro-website">
        <img
          src={getImageUrl("Navbar/logo.png")} 
          alt="Mikro Stone Cottage Logo"
          className={styles.logo} 
        />
      </NavLink>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("Navbar/closeIcon.png")
              : getImageUrl("Navbar/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : ""}>
              About us
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" className={({ isActive }) => isActive ? styles.active : ""}>
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? styles.active : ""}>
              Contact us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
