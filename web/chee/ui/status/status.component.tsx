import { useCheeContext } from "../../app-context";
import styles from "./status.module.scss";

export const Status = () => {
  const { status } = useCheeContext();

  return <div className={`${styles.status} ${styles[status]}`}>{status}</div>;
};
