import React from "react";

export type IStatus = "initial" | "connected" | "fetched" | "minted";

export interface ICheeContext {
  address: string;
  blockchain: string;
  status: IStatus;
  setStatus: React.Dispatch<React.SetStateAction<IStatus>>;
}

const initValue: ICheeContext = {
  address: undefined,
  blockchain: undefined,
  status: "initial",
  setStatus: undefined,
};

export const cheeContext = React.createContext<ICheeContext>(initValue);

export const useCheeContext = () => {
  const context = React.useContext(cheeContext);
  return context;
};
