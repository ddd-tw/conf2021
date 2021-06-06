import { createTheme, ThemeProvider } from "@material-ui/core";
import themeConfig from "@site/src/theme";
import React, { memo, ReactNode } from "react";

export type DarkProps = {
  children?: ReactNode;
};

const theme = createTheme({
  ...themeConfig,
  palette: {
    ...themeConfig.palette,
    mode: "dark",
  },
});

export default memo(function ({ children }: DarkProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
});
