import { useWallet } from "@aptos-labs/wallet-adapter-react";
import React from "react";
import { useAutoConnect } from "./components";
import WalletButtons from "./components/walletButtons";

import styles from "./connectSection.module.scss";

export const ConnectSection: React.FC = () => {
  const { autoConnect, setAutoConnect } = useAutoConnect();
  const { connected, disconnect, account } = useWallet();
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(account.address);
    setTimeout(() => setCopied(false), 1000);
    setCopied(true);
  };

  return (
    <div className={styles.connect}>
      {connected ? (
        <>
          <h2 className={styles.connected}>Wallet Connected</h2>
          <div className={styles.address} onClick={copyToClipboard}>
            <div className={styles.zeroX}>0x</div>
            <div className={styles.symbols}>{account.address.slice(2, 6)}</div>
            <div className={styles.symbols}>...</div>
            <div className={styles.symbols}>{account.address.slice(-4)}</div>
            <div className={`${styles.copy} ${copied && styles.copied}`}>
              <div>Address copied...</div>
            </div>
          </div>
          <button className={styles.disconnect} onClick={() => disconnect()}>
            Disconnect
          </button>
        </>
      ) : (
        <>
          <h2>Connect Wallet to Get Your Nomis Score</h2>
          <div className={styles.buttons}>
            <WalletButtons />
          </div>
          <div
            className={styles.autoConnect}
            onClick={() => setAutoConnect(!autoConnect)}
          >
            <div
              className={`${styles.checkbox} ${autoConnect && styles.active}`}
            />
            <span>AutoConnect</span>
          </div>
        </>
      )}
    </div>
  );
};
