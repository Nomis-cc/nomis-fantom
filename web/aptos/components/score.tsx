import React from "react";
import type { IData, IPreData } from "..";

import styles from "./score.module.scss";

const lsKey = "aptos-score-data";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

type IProps = {
  address: string;
};

export const Score: React.FC<IProps> = (props) => {
  const { address } = props;

  const [isLoading, setIsLoading] = React.useState(false);
  const [data, setData] = React.useState<IData>(null);
  const [error, setError] = React.useState<string>(null);

  const [time, setTime] = React.useState<Date>(null);

  const getScore = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const preData: IPreData = await fetch(
        `https://api.nomis.cc/api/v1/aptos/wallet/${address}/score`

        // ! ONLY FOR TEST
        // `https://api.nomis.cc/api/v1/aptos/wallet/${"0x8fbb89b979c0a6976e77be646a421a4d40107c20c896b4d11af40d7a44ee1e01"}/score`
      ).then((res) => res.json());

      window.localStorage.setItem(
        lsKey,
        JSON.stringify({ address, preData, date: new Date() })
      );

      setData(preData.data);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    if (!address) return;

    const localStorage: { address: string; preData: IPreData; date: Date } =
      JSON.parse(window.localStorage.getItem(lsKey));

    if (!localStorage) {
      getScore();
      return;
    }

    const { date, preData, address: lsAddress } = localStorage;

    if (address != lsAddress) {
      getScore();
      return;
    }

    setTime(new Date(date));

    const scoredTime = new Date(date).getTime();
    const todayTime = new Date().getTime();

    const day = 1000 * 60 * 60 * 24;

    const isExpired = todayTime - scoredTime < day ? false : true;

    !isExpired && address && preData && setData(preData.data);
  }, [address, isLoading]);

  if (!address) return <></>;

  return (
    <div className={styles.score}>
      <div className={styles.number}>
        {isLoading && !data && "Loading..."}
        {error && "Error"}
        <div className={styles.value}>
          <div
            className={styles.raw}
            style={{
              color: `hsla(${data ? 160 * data.score : 0}, 50%, 50%, 100%)`,
            }}
          >
            {data && Math.floor(data.score * 10000) / 100}
          </div>
          {data && <div className={styles.outOf}>/100</div>}
        </div>
        <button
          disabled={isLoading}
          className={`${styles.reload} ${isLoading && styles.spinning}`}
          onClick={() => getScore()}
        >
          sync
        </button>
      </div>
      {time && (
        <div className={styles.updated}>
          <h5>Updated</h5>
          <div>{`${
            months[time.getMonth()]
          } ${time.getDate()}, ${time.getFullYear()} at ${time.getHours()}:${
            time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes()
          }`}</div>
        </div>
      )}
    </div>
  );
};
