import styles from "./Pagination.module.css";

interface PaginationProps {
  page: number;
  lastPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  lastPage,
  onPageChange,
}) => {
  const generatePages = () => {
    const pages = [];

    if (page > 2) {
      pages.push(1);
      if (page > 3) pages.push("...");
    }

    if (page > 1) pages.push(page - 1);
    pages.push(page);
    if (page < lastPage) pages.push(page + 1);

    if (page < lastPage - 1) {
      if (page < lastPage - 2) pages.push("...");
      pages.push(lastPage);
    }

    return pages;
  };

  return (
    <div className={styles.pagination}>
      {generatePages().map((p, index) =>
        typeof p === "number" ? (
          <button
            key={index}
            className={`${styles.pageButton} ${
              p === page ? styles.active : ""
            }`}
            onClick={() => onPageChange(p)}
          >
            {p}
          </button>
        ) : (
          <span key={index} className={styles.ellipsis}>
            ...
          </span>
        )
      )}
    </div>
  );
};

export default Pagination;
