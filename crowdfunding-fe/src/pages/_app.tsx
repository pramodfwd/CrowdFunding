import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "../styles/theme/lightTheme";
import createEmotionCache from "../utilities/createEmotionCache";
import Navbar from "@/components/Navbar/navbar"; 
import { Box } from "@mui/material";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";
import { store } from "Redux/Store";
import { Provider } from "react-redux"; 


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <Provider store={store} >  
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Box mb="75px" >
        <Navbar/>
        </Box>
        <Component {...pageProps} />
        <Footer />
        <Copyright />
      </ThemeProvider>
    </CacheProvider>
    </Provider>
  );
}
