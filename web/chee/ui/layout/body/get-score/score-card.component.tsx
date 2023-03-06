import React, { FC } from "react";
import { useGetScore } from "../../../mint-score/use-get-score.hook";

import styles from "./score-card.module.scss";

export const ScoreCard: FC = () => {
  const { data, fetchData, error, isLoading } = useGetScore();

  console.log("data", data);

  const score = data?.score;

  return (
    <>
      <div className={styles.card}>
        {score || null}
        {isLoading && "loading..."}
        <button onClick={() => fetchData()}>Get Score</button>
      </div>
      {error && error.message}
    </>
  );
};
