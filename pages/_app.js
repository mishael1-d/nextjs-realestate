import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(
      <>
        <ToastContainer />
        <Component {...pageProps} />
      </>
    );
  }
  return (
    <>
      <ToastContainer />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
