import styles from "./header.module.scss";

import type { FC } from "react";
import { DisconnectButton } from "../../disconnect-button";
import React from "react";

export const Header: FC = () => {
  return React.useMemo(() => {
    return (
      <div className={styles.header}>
        {<DisconnectButton />}
        <a
          className={styles.cheeLogo}
          href={"https://chee.finance"}
          target={"_blank"}
        >
          <img src={"/chee_logo.png"} alt="chee.finance logo" />
        </a>
      </div>
    );
  }, []);
};
