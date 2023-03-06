import { Body, Footer, Header } from ".";

import type { FC } from "react";

import styles from "./layout.module.scss";

interface IProps {
  children: React.ReactNode;
}

export const Layout: FC<IProps> = (props) => {
  const { children } = props;

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
};
