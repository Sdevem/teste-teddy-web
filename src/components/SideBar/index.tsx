import { NavLink, useLocation } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { FaHome, FaUser, FaBox } from "react-icons/fa"; // Ícones

const Sidebar = ({
  isOpen,
  closeSidebar,
}: {
  isOpen: boolean;
  closeSidebar: () => void;
}) => {
  const location = useLocation();

  // Isso cobre: /clients, /clients/select, /clients/123 etc.
  const isClientsSection = location.pathname.startsWith("/clients");
  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <div className={styles.sidebarHeader}>
        <img
          src="/Header.png"
          alt="Logo"
          className={styles.logo}
          onClick={closeSidebar}
        />
      </div>

      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          <FaHome className={styles.icon} /> Home
        </NavLink>
        <NavLink
          to="/clients"
          className={() => (isClientsSection ? styles.activeLink : styles.link)}
        >
          <FaUser className={styles.icon} /> Cliente
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          <FaBox className={styles.icon} /> Produto
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
