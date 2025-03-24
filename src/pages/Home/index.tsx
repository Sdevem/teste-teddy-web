import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Olá, seja bem-vindo</h1>
      <input
        type="text"
        placeholder="Digite seu nome"
        className={styles.input}
      />{" "}
      <Link to="/clients">
        <button className={styles.button}>Entrar</button>
      </Link>
    </div>
  );
};

export default Home;
