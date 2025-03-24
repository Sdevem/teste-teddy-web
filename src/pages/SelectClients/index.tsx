import { useEffect, useState } from "react";
import Card from "../../components/Card";
import styles from "./selectClient.module.css";
import { useSelectedClients } from "../../Context/SelectClientContext";

interface Client {
  id: number;
  name: string;
  salary: number;
  company: number;
}

const SelectedClients: React.FC = () => {
  const { selectedIds, clearSelection } = useSelectedClients();
  const [clients, setClients] = useState<Client[]>([]);

  const buscarSelecionados = async () => {
    if (selectedIds.length === 0) {
      setClients([]);
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/clients/by-ids?ids=${selectedIds.join(",")}`
      );

      if (!response.ok) {
        throw new Error("Erro ao buscar clientes selecionados");
      }

      const result = await response.json();
      setClients(result);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Erro:", error.message);
      }
    }
  };

  useEffect(() => {
    buscarSelecionados();
  }, [selectedIds]);

  return (
    <section className={styles.clients}>
      <h2 className={styles.headerInfo}>Clientes Selecionados</h2>

      <section className={styles.list}>
        {clients.length > 0 ? (
          clients.map((client) => (
            <Card
              key={client.id}
              id={client.id}
              name={client.name}
              salary={client.salary}
              company={client.company}
              readonly
            />
          ))
        ) : (
          <p>Nenhum cliente Selecionado...</p>
        )}
      </section>

      <button className={styles.createButton} onClick={clearSelection}>
        Limpar clientes selecionados
      </button>
    </section>
  );
};

export default SelectedClients;
