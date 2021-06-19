import { css, cx } from "@emotion/css";
import FootPrint, { FootPrintProps } from "@site/src/icon/FootPrint";
import React, { memo, useMemo } from "react";

export type FootProps = FootPrintProps & {
  highlight: boolean;
  foot: "right" | "left";
};

const cssBase = css`
  label: Base;
  transition: color 5s ease-out, opacity 5s ease-out,
    transform 0.5s cubic-bezier(0.39, 0.575, 0.565, 1);
  color: #888888;
  opacity: 0.2;
`;

const cssActive = css`
  label: Active;
  color: #8afff9;
  transform: scale(1.5);
  transition: color 0.2s cubic-bezier(0.39, 0.575, 0.565, 1),
    opacity 0.2s cubic-bezier(0.39, 0.575, 0.565, 1),
    transform 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  opacity: 1;
`;

export default memo(function Foot({
  highlight = false,
  className,
  foot = "left",
  ...props
}: FootProps) {
  const clsDiv = useMemo(
    () => css`
      label: FootDiv;
      transform: rotate(180deg) ${foot === "left" ? "" : "scaleX(-1)"}
        translateX(-12px);
    `,
    [foot]
  );
  const cls = cx(cssBase, highlight ? cssActive : undefined, className);
  return (
    <div className={clsDiv}>
      <FootPrint className={cls} {...props} />
    </div>
  );
});
