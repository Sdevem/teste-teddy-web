import { NavLink } from "react-router-dom";
import Sidebar from "../SideBar";
import styles from "./Header.module.css";
import { useState } from "react";
import { useUser } from "../../Context/UserContext";

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const { username } = useUser();

  const openSidebar = (): void => setIsSidebarOpen(true);
  const closeSidebar = (): void => setIsSidebarOpen(false);

  console.log(username);

  return (
    <header className={styles.header}>
      <div className={styles.logoAndMenu}>
        <div className={styles.menuIconContainer}>
          <img
            src="./menu-svgrepo-com.png"
            alt="ícone"
            className={styles.menuIcon}
            onClick={openSidebar}
          />
        </div>
        <div className={styles.logoContainer}>
          <img src="./Logo-Teddy.png" alt="logo" />
        </div>
      </div>

      <nav className={styles.nav}>
        <NavLink
          to="/clients"
          end
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Clientes
        </NavLink>
        <NavLink
          to="/clients/select"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Clientes Selecionados
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Sair
        </NavLink>
      </nav>

      <div className={styles.userContainer}>
        <span className={styles.userName}>
          Olá, <strong>{username || "Usuário"}</strong>
        </span>
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
    </header>
  );
};

export default Header;
