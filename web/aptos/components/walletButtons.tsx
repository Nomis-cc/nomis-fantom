import { useWallet, WalletReadyState } from "@aptos-labs/wallet-adapter-react";

import styles from "./walletButtons.module.scss";

export default function WalletButtons() {
  const { wallets, connect } = useWallet();

  return (
    <>
      {wallets.map((wallet) => {
        const isWalletReady =
          wallet.readyState === WalletReadyState.Installed ||
          wallet.readyState === WalletReadyState.Loadable;
        return (
          <button
            className={styles.button}
            // disabled={!isWalletReady}
            key={wallet.name}
            onClick={() => connect(wallet.name)}
          >
            <>
              <img src={wallet.icon} alt={`${wallet.name} logo`} />
              {wallet.name}
            </>
          </button>
        );
      })}
    </>
  );
}
