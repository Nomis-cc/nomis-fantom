import { RiseWallet } from "@rise-wallet/wallet-adapter";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import { MartianWallet } from "@martianwallet/aptos-wallet-adapter";
import { PontemWallet } from "@pontem/wallet-adapter-plugin";
import { TrustWallet } from "@trustwallet/aptos-wallet-adapter";
import { FewchaWallet } from "fewcha-plugin-wallet-adapter";
import { MSafeWalletAdapter } from "msafe-plugin-wallet-adapter";
import { WelldoneWallet } from "@welldone-studio/aptos-wallet-adapter";
import { NightlyWallet } from "@nightlylabs/aptos-wallet-adapter-plugin";

import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";

import { AutoConnectProvider, useAutoConnect } from "./autoConnectProvider";

const WalletContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { autoConnect } = useAutoConnect();

  const wallets = [
    new PetraWallet(),
    new MartianWallet(),
    new RiseWallet(),
    new PontemWallet(),
    new TrustWallet(),
    new FewchaWallet(),
    new MSafeWalletAdapter(),
    new NightlyWallet(),
    new WelldoneWallet(),
  ];

  return (
    <AptosWalletAdapterProvider plugins={wallets} autoConnect={autoConnect}>
      {children}
    </AptosWalletAdapterProvider>
  );
};

export const AppContext: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <AutoConnectProvider>
      <WalletContextProvider>{children}</WalletContextProvider>
    </AutoConnectProvider>
  );
};
