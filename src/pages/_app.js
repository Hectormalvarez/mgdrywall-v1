import "../../configureAmplify";
import Layout from "../components/layout/Layout";
import "@aws-amplify/ui-react/styles.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
