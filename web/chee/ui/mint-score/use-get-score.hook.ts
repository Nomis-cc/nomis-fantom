import React from "react";
import { useAccount, useContract, useProvider, useSigner } from "wagmi";

import { errors } from "./errors";
import { abi } from "./abi";
import type { IScoreResponse } from "./response.interface";
import { path } from "./api-path";

type IData = IScoreResponse;

interface IError {
  message: string;
  status: number;
}

export const useGetScore = () => {
  const contractAddress = "0x71D724EaF572Cf1bc3b1d0871D3D912B2597De58";
  const contractAbi = abi;
  const message = errors;

  const [data, setData] = React.useState<IData | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<IError | null>(null);
  const [deadline, setDeadline] = React.useState<number | null>(null);

  const { address } = useAccount();
  const { data: signer } = useSigner();
  const provider = useProvider();
  const contract = useContract({
    abi: contractAbi,
    address: contractAddress,
    signerOrProvider: signer,
  });

  const fetchData = async () => {
    try {
      setError(null);
      setIsLoading(true);
      if (!address) throw new Error(message.notConnected);

      const nonce = await contract.functions.getNonce();
      if (!nonce) throw new Error(message.nonce);

      const blockNumber = await provider.getBlockNumber();
      if (!blockNumber) throw new Error(message.blockNumber);

      const block = await provider.getBlock(blockNumber);
      if (!block) throw new Error(message.block);

      const timestamp = block.timestamp;
      const deadline = timestamp + 20000;
      setDeadline(deadline);

      const resJson = await fetch(
        path({
          wallet: address,
          deadline,
          nonce: nonce,
          apiSlug: "celo",
        })
      );
      if (!resJson.ok) throw new Error((await resJson.json()).messages[0]);

      const response: IData = (await resJson.json()).data;
      if (!response) throw new Error(message.noResponse);

      setData(response);

      setIsLoading(false);
      setError(null);
    } catch (error) {
      setError(error as IError);
      setIsLoading(false);
    }
  };
  return {
    data,
    fetchData,
    deadline,
    isLoading,
    isError: error === null ? false : true,
    error,
  };
};
