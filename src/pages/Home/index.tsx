import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import { useUser } from "../../Context/UserContext";

const Home: React.FC = () => {
  const [inputName, setInputName] = useState("");
  const [error, setError] = useState("");
  const { setUsername } = useUser();

  const navigate = useNavigate();

  const handleEnter = () => {
    if (!inputName.trim()) {
      setError("Por favor, digite seu nome antes de continuar.");
      return;
    }

    setError("");
    setUsername(inputName);
    navigate("/clients");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Olá, seja bem-vindo</h1>

      <input
        type="text"
        placeholder="Digite seu nome"
        className={styles.input}
        value={inputName}
        onChange={(e) => setInputName(e.target.value)}
      />

      {error && <p className={styles.error}>{error}</p>}

      <button className={styles.button} onClick={handleEnter}>
        Entrar
      </button>
    </div>
  );
};

export default Home;
