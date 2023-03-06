import { shortAddress, useValidAddress } from "../../../../utils";
import { ConnectButtons } from "../../..";
import styles from "./connect.module.scss";
import { useCheeContext } from "../../../../app-context";
import React from "react";
import { useAccount } from "wagmi";

export const Connect = () => {
  const isValid = useValidAddress();
  const { isConnected, address: cAddress } = useAccount();

  const { address } = useCheeContext();

  return (
    <div className={styles.connect}>
      <h1>Connect Wallet</h1>
      <div className={styles.hint}>
        You need to connect{" "}
        <span>{shortAddress({ address, with0x: true })}</span> only.
      </div>
      <ConnectButtons />
      {isConnected && address != cAddress && (
        <div>
          You connected wrong address. Change address in your wallet and try
          again.
        </div>
      )}
    </div>
  );
};
