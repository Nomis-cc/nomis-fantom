export type IStat = {
  label: string;
  description: string;
  units: string;
};

export type IData = {
  address: string;
  score: number;
  mintedScore: number;
  scoreType: number;
  signature: null;
  stats: {
    noData: true;
    nativeToken: string;
    deployedContracts: number;
    nativeBalance: number;
    nativeBalanceUSD: number;
    holdTokensBalanceUSD: number;
    walletAge: number;
    totalTransactions: number;
    totalRejectedTransactions: number;
    averageTransactionTime: number;
    maxTransactionTime: number;
    minTransactionTime: number;
    walletTurnover: number;
    turnoverIntervals: null;
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
      DeployedContracts: IStat;
      NativeBalance: IStat;
      NativeBalanceUSD: IStat;
      HoldTokensBalanceUSD: IStat;
      WalletAge: IStat;
      TotalTransactions: IStat;
      TotalRejectedTransactions: IStat;
      AverageTransactionTime: IStat;
      MaxTransactionTime: IStat;
      MinTransactionTime: IStat;
      WalletTurnover: IStat;
      BalanceChangeInLastMonth: IStat;
      BalanceChangeInLastYear: IStat;
      NftHolding: IStat;
      TimeFromLastTransaction: IStat;
      NftTrading: IStat;
      NftWorth: IStat;
      LastMonthTransactions: IStat;
      LastYearTransactions: IStat;
      TransactionsPerMonth: IStat;
      TokensHolding: IStat;
    };
  };
};

export type IPreData = {
  data: IData;
  messages: string[];
  succeeded: true;
};
