/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import Page from "../components/Page";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

export default MyApp;
