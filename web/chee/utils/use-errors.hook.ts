import React from "react";

import { isAddress } from "./is-address";

interface IProps {
  address: string | undefined;
  blockchain: string | undefined;
  isLoading: boolean;
  redirect_url: string | undefined;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

export const useErrors = (props: IProps) => {
  const { address, blockchain, isLoading, redirect_url, setError } = props;

  React.useEffect(() => {
    if (!isLoading) {
      if (!address) setError("Address is required");
      if (!isAddress(address)) setError("You provided wrong address");
      if (!blockchain) setError("Blockchain is required");
      if (!redirect_url) setError("URL to redirect is required");
    }
  }, [address]);
};
