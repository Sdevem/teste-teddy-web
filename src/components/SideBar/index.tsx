import styles from "./Sidebar.module.css";

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
        <a href="">Home</a>
        <a href="">Cliente</a>
        <a href="">Produto</a>
      </nav>
    </div>
  );
};

export default Sidebar;
