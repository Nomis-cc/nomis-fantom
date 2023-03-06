import { FC } from "react";
import { useConnect } from "wagmi";
import { useValidAddress } from "../../utils";
import styles from "./connect-buttons.module.scss";

export const ConnectButtons: FC = () => {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();

  return (
    <div className={styles.connect}>
      {connectors.map((connector) => (
        <button
          className={styles.connector}
          // disabled={!connector.ready}
          key={connector.id}
          onClick={() => connect({ connector, chainId: 42220 })}
        >
          {connector.name}
          {isLoading &&
            pendingConnector?.id === connector.id &&
            " (connecting)"}
        </button>
      ))}
      {error && <div>{error.message}</div>}
    </div>
  );
};
