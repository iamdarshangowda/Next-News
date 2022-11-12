import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme";
import { Layout } from "../components/layout/layout";
import ContextProviderWrapper from "../context/ContextProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ContextProviderWrapper>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ContextProviderWrapper>
  );
}
