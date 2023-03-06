export const base = "https://api.nomis.cc/api/v1";

interface ISignatureProps {
  apiSlug: string;
  deadline: number;
  nonce: number;
  /** 0 - finance, 1 - concrete token */
  scoreType?: 1 | 0;
  wallet: `0x${string}`;
}

export const path = (props: ISignatureProps) => {
  const { apiSlug, deadline, nonce, scoreType = 0, wallet } = props;
  return `${base}/${apiSlug}/wallet/${wallet}/score?scoreType=${scoreType}&nonce=${nonce}&deadline=${deadline}`;
};
