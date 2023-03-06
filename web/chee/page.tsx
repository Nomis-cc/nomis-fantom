import type { FC } from "react";

import React from "react";
import { useRouter } from "next/router";

import { cheeContext, ICheeContext, IStatus } from "./app-context";
import { Body, Layout, Status } from "./ui";
import { useErrors } from "./utils";

export const CheePage: FC = () => {
  const [status, setStatus] = React.useState<IStatus>("initial");
  const [error, setError] = React.useState<string>(undefined);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => setIsLoading(false), []);

  const router = useRouter();
  const { query } = router;
  const { address, blockchain, redirect_url } = query as {
    address: string | undefined;
    blockchain: string | undefined;
    redirect_url: string | undefined;
  };

  useErrors({ address, blockchain, isLoading, redirect_url, setError });

  const value: ICheeContext = {
    address,
    blockchain,
    status,
    setStatus,
  };

  if (isLoading)
    return (
      <cheeContext.Provider value={value}>
        <Layout>Loading...</Layout>
      </cheeContext.Provider>
    );

  if (error)
    return (
      <cheeContext.Provider value={value}>
        <Layout>{error}</Layout>
      </cheeContext.Provider>
    );

  return (
    <cheeContext.Provider value={value}>
      <Layout>
        <Body />
      </Layout>
      <Status />
    </cheeContext.Provider>
  );
};
