import React from "react";
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
      {/* Sidebar Header: Logo (que também fecha o sidebar) */}
      <div className={styles.sidebarHeader}>
        {/* Logo funcionando como botão de fechar */}
        <img
          src="/Header.png" // Caminho da logo
          alt="Logo"
          className={styles.logo}
          onClick={closeSidebar} // Função para fechar o sidebar
        />
      </div>

      {/* Navegação do Menu */}
      <nav>
        <a href="">Home</a>
        <a href="">Sobre</a>
        <a href="">Serviços</a>
        <a href="">Contato</a>
      </nav>
    </div>
  );
};

export default Sidebar;
