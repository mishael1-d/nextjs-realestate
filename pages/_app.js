import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "../components/Layout";
import { AppStateProvider } from "../context/AppState";

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(
      <AppStateProvider>
        <ToastContainer />
        <Component {...pageProps} />
      </AppStateProvider>
    );
  }
  return (
    <AppStateProvider>
      <ToastContainer />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppStateProvider>
  );
}

export default MyApp;
