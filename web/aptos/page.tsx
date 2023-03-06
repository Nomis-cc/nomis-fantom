import { useWallet } from "@aptos-labs/wallet-adapter-react";
import React from "react";
import { ConnectSection } from "./connectSection";

import styles from "./page.module.scss";
import { ScoreSection } from "./scoreSection";

// const NODE_URL = "https://fullnode.devnet.aptoslabs.com/v1";
// const FAUCET_URL = "https://faucet.devnet.aptoslabs.com";

// const aptosClient = new AptosClient(NODE_URL, {
//   WITH_CREDENTIALS: false,
// });
// const tokenClient = new TokenClient(aptosClient);
// const faucetClient = new FaucetClient(NODE_URL, FAUCET_URL);

const AptosMint: React.FC = () => {
  const { connected } = useWallet();

  return (
    <div className={styles.page}>
      <ConnectSection />
      {connected && <ScoreSection />}
    </div>
  );
};

export default AptosMint;
