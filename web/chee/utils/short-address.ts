import { isAddress } from "./is-address";

interface IShortAddress {
  address: string | `0x${string}`;
  with0x?: boolean;
}

export const shortAddress = (props: IShortAddress) => {
  const { address, with0x = false } = props;

  if (!isAddress(address)) return "";

  const addr = address.slice(2, 6) + "..." + address.slice(-4);

  if (with0x) return "0x" + addr;

  return addr;
};
