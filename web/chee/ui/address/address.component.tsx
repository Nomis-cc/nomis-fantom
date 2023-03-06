import { useCheeContext } from "../../app-context";
import { shortAddress } from "../../utils";

import styles from "./address.module.scss";

export const Address = () => {
  const context = useCheeContext();
  const { address } = context;

  return <div className={styles.address}>{shortAddress({ address })}</div>;
};
