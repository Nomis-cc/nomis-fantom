export const isAddress = (address: string | undefined) => {
  if (!address) return false;

  if (address.slice(0, 2) === "0x" && address.length === 42) return true;

  return false;
};
