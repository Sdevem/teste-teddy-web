import { useEffect, useState } from "react";
import Card from "../../components/Card";
import styles from "./Client.module.css";
import Pagination from "../../components/Pagination";
import CreateClientModal from "../../components/CreateClientModal";

interface Client {
  id: number;
  name: string;
  salary: number;
  company: number;
}

const Client: React.FC = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(8);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const buscarRepositorios = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/clients?page=${page}&limit=${limit}`
      );

      if (!response.ok) {
        throw new Error("Erro na resposta da API");
      }

      const result = await response.json();
      setClients(result.data);
      setTotal(result.total);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  useEffect(() => {
    buscarRepositorios();
  }, [page, limit]);

  return (
    <section className={styles.clients}>
      {showModal && (
        <CreateClientModal
          onClose={() => setShowModal(false)}
          onSuccess={() => {
            buscarRepositorios();
            setShowModal(false);
          }}
        />
      )}
      <div className={styles.headerInfo}>
        <span>Clientes encontrados: {clients.length}</span>

        <label className={styles.selectWrapper}>
          Clientes por página:
          <select
            value={limit}
            onChange={(e) => {
              setLimit(Number(e.target.value));
              setPage(1); // resetar para página 1 ao mudar o limite
            }}
          >
            {Array.from({ length: 16 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </label>
      </div>
      <section className={styles.list}>
        {clients.length > 0 ? (
          clients.map((client) => (
            <Card
              key={client.id}
              id={client.id}
              name={client.name}
              salary={client.salary}
              company={client.company}
              onUpdate={buscarRepositorios}
            />
          ))
        ) : (
          <p>Clientes não encontrados ....</p>
        )}
      </section>
      <button
        className={styles.createButton}
        onClick={() => setShowModal(true)}
      >
        Criar Cliente
      </button>{" "}
      <Pagination
        page={page}
        lastPage={Math.ceil(total / limit)}
        onPageChange={(p) => setPage(p)}
      />
    </section>
  );
};

export default Client;
