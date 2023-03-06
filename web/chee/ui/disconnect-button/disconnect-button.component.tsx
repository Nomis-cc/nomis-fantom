import { useDisconnect } from "wagmi";
import { useCheeContext } from "../../app-context";

import styles from "./disconnect-button.module.scss";

export const DisconnectButton = () => {
  const { disconnectAsync } = useDisconnect();
  const { setStatus, status } = useCheeContext();

  const handleDisconnect = async () => {
    await disconnectAsync().then(() => {
      setStatus("initial");
    });
  };

  if (status != "initial")
    return (
      <button className={styles.disconnect} onClick={handleDisconnect}>
        Disconnect
      </button>
    );
};
