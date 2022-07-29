import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import themeLight from "../src/themes/light";
import GlobalStyles from "../src/styles/global";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => (
  <ThemeProvider theme={{ colors: themeLight }}>
    <GlobalStyles />
      <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
