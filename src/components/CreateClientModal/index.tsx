import { useEffect, useState } from "react";
import styles from "./CreateClientModal.module.css";
import { NumericFormat } from "react-number-format";

interface CreateClientModalProps {
  id?: number; // opcional
  onClose: () => void;
  onSuccess: () => void;
}

const CreateClientModal: React.FC<CreateClientModalProps> = ({
  id,
  onClose,
  onSuccess,
}) => {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState<number | "">("");
  const [company, setCompany] = useState<number | "">("");
  const [error, setError] = useState("");

  const isEditing = !!id;

  // Se for edição, buscar cliente
  useEffect(() => {
    const fetchClient = async () => {
      if (id) {
        const response = await fetch(`http://localhost:3000/clients/${id}`);
        if (response.ok) {
          const client = await response.json();
          setName(client.name);
          setSalary(Number(client.salary));
          setCompany(Number(client.company));
        } else {
          alert("Erro ao carregar cliente.");
          onClose();
        }
      }
    };

    fetchClient();
  }, [id, onClose]);

  const handleSubmit = async () => {
    if (!name.trim() || salary === "" || company === "") {
      setError("Preencha todos os campos corretamente.");
      return;
    }

    setError("");

    const url = id
      ? `http://localhost:3000/clients/${id}`
      : `http://localhost:3000/clients`;

    const method = id ? "PUT" : "POST";

    const response = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        salary: Number(salary),
        company: Number(company),
      }),
    });

    if (response.ok) {
      onSuccess();
      onClose();
    } else {
      alert("Erro ao salvar cliente");
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>{isEditing ? "Editar Cliente:" : "Criar Cliente:"}</h2>
          <button className={styles.close} onClick={onClose}>
            ×
          </button>
        </div>

        <input
          type="text"
          placeholder="Digite o nome: exemplo Saul"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <NumericFormat
          placeholder="Digite o Salário: exemplo 10000"
          value={salary}
          onValueChange={(values) => setSalary(values.floatValue ?? "")}
          thousandSeparator="."
          decimalSeparator=","
          decimalScale={2}
          allowNegative={false}
          className={styles.input}
        />

        <NumericFormat
          placeholder="Digite o valor da empresa: exemplo 100000"
          value={company}
          onValueChange={(values) => setCompany(values.floatValue ?? "")}
          thousandSeparator="."
          decimalSeparator=","
          decimalScale={2}
          allowNegative={false}
          className={styles.input}
        />

        {error && <p className={styles.error}>{error}</p>}

        <button className={styles.createButton} onClick={handleSubmit}>
          {isEditing ? "Editar Cliente" : "Criar Cliente"}
        </button>
      </div>
    </div>
  );
};

export default CreateClientModal;
