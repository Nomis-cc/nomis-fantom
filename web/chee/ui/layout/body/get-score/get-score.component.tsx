import { shortAddress, useValidAddress } from "../../../../utils";
import styles from "./get-score.module.scss";
import { useCheeContext } from "../../../../app-context";
import { ScoreCard } from "./score-card.component";
import React from "react";

export const GetScore = () => {
  const isValid = useValidAddress();

  const { setStatus } = useCheeContext();
  isValid && setStatus("connected");

  return (
    <div className={styles.connect}>
      <h1>Your Nomis Score</h1>
      <div className={styles.hint}></div>
      <ScoreCard />
    </div>
  );
};
