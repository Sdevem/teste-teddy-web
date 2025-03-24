import styles from "./DeleteClientModal.module.css";

interface DeleteClientModalProps {
  name: string;
  id: number;
  onClose: () => void;
  onSuccess: () => void;
}

const DeleteClientModal: React.FC<DeleteClientModalProps> = ({
  name,
  id,
  onClose,
  onSuccess,
}) => {
  const handleDelete = async () => {
    console.log(id);
    const response = await fetch(`http://localhost:3000/clients/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      onSuccess(); // Atualiza lista
      onClose(); // Fecha modal
    } else {
      alert("Erro ao excluir cliente");
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <strong>Excluir cliente:</strong>
          <button className={styles.close} onClick={onClose}>
            ×
          </button>
        </div>
        <p>
          Você está prestes a excluir o cliente: <strong>{name}</strong>
        </p>
        <button className={styles.deleteButton} onClick={handleDelete}>
          Excluir Cliente
        </button>
      </div>
    </div>
  );
};

export default DeleteClientModal;
