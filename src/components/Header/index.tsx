import Sidebar from "../SideBar";
import styles from "./Header.module.css";
import { useState } from "react";

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  // Função para abrir o sidebar
  const openSidebar = (): void => setIsSidebarOpen(true);

  // Função para fechar o sidebar
  const closeSidebar = (): void => setIsSidebarOpen(false);

  return (
    <header className={styles.header}>
      {/* Div externa para logo e ícone de menu */}
      <div className={styles.logoAndMenu}>
        <div className={styles.menuIconContainer}>
          <img
            src="/menu-svgrepo-com.png"
            alt="ícone"
            className={styles.menuIcon}
            onClick={openSidebar} // Aqui pode ir a lógica para abrir o sidebar
          />
        </div>
        <div className={styles.logoContainer}>
          <img src="/Logo-Teddy.png" alt="logo" />
        </div>
      </div>

      {/* Navegação */}
      <nav className={styles.nav}>
        <a href="">Clientes</a>
        <a href="">Clientes Selecionados</a>
        <a href="">Sair</a>
      </nav>

      {/* Nome do usuário à direita */}
      <div className={styles.userContainer}>
        <span className={styles.userName}>
          Olá, <strong>Usuário</strong>
        </span>
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
    </header>
  );
};

export default Header;
