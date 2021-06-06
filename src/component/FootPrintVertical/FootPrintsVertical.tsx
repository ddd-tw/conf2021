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
  useEffect(() => {
    if (step >= size) setStep(0);
  }, [size, step]);
  useEffect(() => {
    const interval = setInterval(() => {
      setStep((step) => (step + 1) % size);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [size]);
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
