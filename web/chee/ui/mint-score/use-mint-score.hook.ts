import React from "react";
import { useContract, useSigner } from "wagmi";
import { abi } from "./abi";
interface IProps {
  signature: string;
  score: number;
  deadline: number;
}

export const useMintScore = (props: IProps) => {
  const { deadline, score, signature } = props;
  const contractAddress = "0x71D724EaF572Cf1bc3b1d0871D3D912B2597De58";
  const contractAbi = abi;

  const { data: signer } = useSigner();

  const contract = useContract({
    abi: contractAbi,
    address: contractAddress,
    signerOrProvider: signer,
  });

  const [error, setError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const mint = async () => {
    try {
      console.log(signature);
      console.log(score);
      console.log(deadline);

      setIsLoading(true);
      contract.functions.setScore(signature, score, deadline);
      setIsLoading(false);
      setIsSuccess(true);
    } catch (error) {
      setError(error.message);
    }
  };

  return {
    mint,
    isSuccess,
    isLoading,
    error,
    isError: error ? true : false,
  };
};
