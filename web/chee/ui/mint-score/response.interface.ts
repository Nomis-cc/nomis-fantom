export interface IScoreResponse {
  address: string;
  score: number;
  mintedScore: number;
  scoreType: number;
  signature: string;
  stats: {
    noData: boolean;
    deployedContracts: number;
    nativeBalance: number;
    nativeBalanceUSD: number;
    walletAge: number;
    totalTransactions: number;
    totalRejectedTransactions: number;
    averageTransactionTime: number;
    maxTransactionTime: number;
    minTransactionTime: number;
    walletTurnover: number;
    turnoverIntervals: [
      {
        startDate: Date;
        endDate: Date;
        amountSumValue: number;
        amountOutSumValue: number;
        amountInSumValue: number;
        count: number;
      }
    ];
    balanceChangeInLastMonth: number;
    balanceChangeInLastYear: number;
    nftHolding: number;
    timeFromLastTransaction: number;
    nftTrading: number;
    nftWorth: number;
    lastMonthTransactions: number;
    lastYearTransactions: number;
    transactionsPerMonth: number;
    tokensHolding: number;
    statsDescriptions: {
      noData: IStatDescription1;
      deployedContracts: IStatDescription1;
      nativeBalance: IStatDescription1;
      nativeBalanceUSD: IStatDescription1;
      walletAge: IStatDescription1;
      totalTransactions: IStatDescription1;
      totalRejectedTransactions: IStatDescription1;
      averageTransactionTime: IStatDescription1;
      maxTransactionTime: IStatDescription1;
      minTransactionTime: IStatDescription1;
      walletTurnover: IStatDescription1;
      turnoverIntervals: IStatDescription1;
      balanceChangeInLastMonth: IStatDescription1;
      balanceChangeInLastYear: IStatDescription1;
      nftHolding: IStatDescription1;
      timeFromLastTransaction: IStatDescription1;
      nftTrading: IStatDescription1;
      nftWorth: IStatDescription1;
      lastMonthTransactions: IStatDescription1;
      lastYearTransactions: IStatDescription1;
      transactionsPerMonth: IStatDescription1;
      tokensHolding: IStatDescription1;
    };
  };
}

interface IStatDescription1 {
  label: string;
  description: string;
  units: string;
}
