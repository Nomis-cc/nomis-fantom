import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { Score } from "./components/score";
import styles from "./scoreSection.module.scss";

export const ScoreSection: React.FC = () => {
  const { account } = useWallet();
  return (
    <div className={styles.scoreSection}>
      <h3>Your Nomis Score</h3>
      <Score address={account.address} />
    </div>
  );
};
