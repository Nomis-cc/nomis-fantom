import { useGetScore } from "./use-get-score.hook";
import styles from "./mint.module.scss";

export const MintScore = () => {
  const { data, fetchData, isLoading, isError, error } = useGetScore()!;

  return (
    <div className={styles.mint}>
      <h2>Get Nomis Score</h2>
      {isLoading && "loading"}
      {isError && error.message}
      <button onClick={fetchData}>Get</button>
    </div>
  );
};
