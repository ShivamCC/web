"use client";

import CountUp from "react-countup";

type Props = {
  number: number;
  suffix?: string;
};

const CountStat = ({ number, suffix }: Props) => {
  return (
    <>
      <CountUp
        end={number}
        duration={2.5}
        separator=","
        enableScrollSpy
        scrollSpyOnce
      />
      {suffix && <span>{suffix}</span>}
    </>
  );
};

export default CountStat;
