import { useCheeContext } from "../../../app-context";
import { isAddress } from "../../../utils";
import { Address } from "../../address";
import { Section } from ".";

import styles from "./body.module.scss";
import { FC } from "react";

const Content = () => {
  const { status } = useCheeContext();

  if (status === "initial") return <Section.Connect />;

  if (status === "connected") return <Section.GetScore />;

  if (status === "fetched") return <>Fetched</>;

  if (status === "minted") return <>Minted</>;
};

export const Body = () => {
  const { address } = useCheeContext();

  return (
    <div className={styles.body}>
      {isAddress(address) && <Address />}
      <Content />
    </div>
  );
};
