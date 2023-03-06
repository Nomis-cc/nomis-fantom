import styles from "./footer.module.scss";

import type { FC } from "react";

export const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>Nomis</div>
      <div className={styles.powered}>Powered by</div>
    </div>
  );
};
