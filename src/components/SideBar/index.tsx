import styles from "./Sidebar.module.css";
import { FaHome, FaUser, FaBox } from "react-icons/fa"; // Ícones

const Sidebar = ({
  isOpen,
  closeSidebar,
}: {
  isOpen: boolean;
  closeSidebar: () => void;
}) => {
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
        <a href="">
          <FaHome className={styles.icon} /> Home
        </a>
        <a href="">
          <FaUser className={styles.icon} /> Cliente
        </a>
        <a href="">
          <FaBox className={styles.icon} /> Produto
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
