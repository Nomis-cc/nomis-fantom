import React from "react";
import { useCheeContext } from "../app-context";
import { useAccount } from "wagmi";

export const useValidAddress = () => {
  const { address: connectedAddress } = useAccount();
  const context = useCheeContext();

  if (!connectedAddress) return false;

  const { address: initAddress, setStatus } = context;

  if (connectedAddress === initAddress) setStatus("connected");

  return connectedAddress === initAddress;
};
