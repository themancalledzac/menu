import nProgress from "nprogress";
import Router from "next/router";
import { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";
import Page from "../components/Page";
import "../components/styles/globals.css";
import withData from "../lib/withData";
import "nprogress/nprogress.css";
import "../components/styles/nprogress.css";

Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done());

function MyApp({ Component, pageProps, apollo }) {
  // useEffect(() => {
  //   // Remove the server-side injected CSS.
  //   const jssStyles = document.querySelector("#jss-server-side");
  //   if (jssStyles) {
  //     jssStyles.parentElement.removeChild(jssStyles);
  //   }
  // }, []);

  return (
    <ApolloProvider client={apollo}>
      <Fragment>
        <Head>
          <title>Menu: Restaurant Order System</title>
          <meta
            name='viewport'
            content='minimum-scale=1, initial-scale=1, width=device-width'
          />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Page>
            <Component {...pageProps} />
          </Page>
        </ThemeProvider>
      </Fragment>
    </ApolloProvider>
  );
}

// tell nextJS to fetch all the queries that are in all the children components
MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default withData(MyApp);
