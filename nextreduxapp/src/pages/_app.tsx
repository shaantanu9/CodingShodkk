// import "../styles/globals.css";

import type { AppProps } from "next/app";
import { Provider } from "react-redux";
// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "../../components";
import store from "../store";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </Provider>
  );
}
