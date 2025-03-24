import styles from "./Card.module.css";
import { FaPen, FaPlus } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
import { useState } from "react";
import DeleteClientModal from "../DeleteClientModal";
import CreateClientModal from "../CreateClientModal";
import { AiOutlineMinus } from "react-icons/ai";
import { useSelectedClients } from "../../Context/SelectClientContext";

interface CardProps {
  id: number;
  name: string;
  salary: number;
  company: number;
  readonly?: boolean;
  onUpdate?: () => void;
}

const Card: React.FC<CardProps> = ({
  id,
  name,
  salary,
  company,
  onUpdate,
  readonly,
}) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const { selectedIds, toggleClient } = useSelectedClients();

  const isSelected = selectedIds.includes(id);

  return (
    <section className={styles.card}>
      {/* Modal de confirmação */}
      {showDeleteModal && (
        <DeleteClientModal
          name={name}
          id={id}
          onClose={() => setShowDeleteModal(false)}
          onSuccess={onUpdate ?? (() => {})}
        />
      )}

      {showEditModal && (
        <CreateClientModal
          id={id}
          onClose={() => setShowEditModal(false)}
          onSuccess={() => {
            onUpdate?.();
            setShowEditModal(false);
          }}
        />
      )}

      <div className={styles.card_data}>
        <p>{name}</p>
        <p>Salário: R$ {salary}</p>
        <p>Empresa: R$ {company}</p>
      </div>

      <div className={styles.card_foot}>
        {readonly ? (
          <span className={styles.minusIcon}>-</span> // 👈 novo ícone simples
        ) : (
          <>
            {isSelected ? (
              <AiOutlineMinus
                className={styles.leftIcon}
                onClick={() => toggleClient(id)}
              />
            ) : (
              <FaPlus
                className={styles.leftIcon}
                onClick={() => toggleClient(id)}
              />
            )}
            <FaPen
              className={styles.centerIcon}
              onClick={() => setShowEditModal(true)}
            />
            <FiTrash2
              className={styles.rightIcon}
              onClick={() => setShowDeleteModal(true)}
            />
          </>
        )}
      </div>
    </section>
  );
};

export default Card;
