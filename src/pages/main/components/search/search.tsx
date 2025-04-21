import { Icon, Input } from "@/components/shared";
import styles from "./search.module.css";
import { ChangeEvent } from "react";

interface Props {
  searchPhrase: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Search: React.FC<Props> = ({ searchPhrase, onChange }) => {
  return (
    <div className={styles.container}>
      <Input
        onChange={onChange}
        value={searchPhrase}
        className={styles.input}
        placeholder="Поиск..."
        type="search"
        aria-label="Поиск"
      />
      <div className={styles.iconWrapper}>
        <Icon code="fa-search" margin={"5px 0 0 0"} className={styles.icon} />
      </div>
    </div>
  );
};
