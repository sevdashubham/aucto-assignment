import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import themeLight from "../src/themes/light";
import GlobalStyles from "../src/styles/global";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={{ colors: themeLight }}>
    <GlobalStyles />
      <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
