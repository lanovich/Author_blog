import { Button } from "@/components/shared";
import styles from "./pagination.module.css";

interface Props {
  setPage: (number: number) => void;
  page: number;
  lastPage: number;
}

export const Pagination: React.FC<Props> = ({ setPage, page, lastPage }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Button disabled={page === 1} onClick={() => setPage(1)}>
          в начало
        </Button>
        <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
          назад
        </Button>
        <div className={styles.currentPage}>страница: {page}</div>
        <Button disabled={page === lastPage} onClick={() => setPage(page + 1)}>
          вперёд
        </Button>
        <Button disabled={page === lastPage} onClick={() => setPage(lastPage)}>
          в конец
        </Button>
      </div>
    </div>
  );
};
