import { Box } from "@material-ui/core";
import React, { memo, useEffect, useMemo, useState } from "react";
import Foot from "./Foot";

export type FootPrintsVerticalProps = {
  size?: number;
};

export default memo(function FootPrintsVertical({
  size = 7,
}: FootPrintsVerticalProps) {
  const [step, setStep] = useState(0);
  // for breaking
  const extSize = useMemo(() => size + 2, [size]);
  useEffect(() => {
    if (step >= extSize) setStep(0);
  }, [extSize, size, step]);
  useEffect(() => {
    const interval = setInterval(() => {
      setStep((step) => (step + 1) % (extSize + 2));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [extSize, size]);
  const arr = useMemo(() => Array.from(Array(size)), [size]);
  return (
    <Box
      width="min-content"
      m="auto"
      display="flex"
      flexDirection="column"
      flexWrap="nowrap"
      alignItems="center"
      gap={2}
    >
      {arr.map((_, i) => (
        <Foot
          key={i}
          highlight={i === step}
          foot={i % 2 === 0 ? "left" : "right"}
        />
      ))}
    </Box>
  );
});
