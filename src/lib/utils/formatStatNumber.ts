type FormattedStat = {
  value: number;
  suffix: string;
};

export const formatStatNumber = (num: number): FormattedStat => {
  // Crore
  if (num >= 1_00_00_000) {
    return {
      value: Number((num / 1_00_00_000).toFixed(2)),
      suffix: " Cr+",
    };
  }

  // Lakh
  if (num >= 1_00_000) {
    return {
      value: Number((num / 1_00_000).toFixed(2)),
      suffix: " L+",
    };
  }

  // Normal
  return {
    value: num,
    suffix: "+",
  };
};
