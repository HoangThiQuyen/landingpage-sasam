import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";

// *** Vuexy
import "../styles/@vuexy/core.scss";
// import "../styles/@vuexy/react/libs/swiper/swiper.scss";
import "../styles/@vuexy/react/libs/react-select/_react-select.scss";
import "../styles/@vuexy/base/pages/app-ecommerce.scss";
import "../styles/@vuexy/base/plugins/forms/form-wizard.scss";
import "../styles/@vuexy/react/libs/file-uploader/file-uploader.scss";

// Router progress
import Router from "next/router";
import NProgress from "nprogress"; //  nprogress module
import "nprogress/nprogress.css"; // styles of nprogress

// *** Metronic
import "../styles/@metronic/style.scss";
import "../styles/@metronic/pages/wizard/wizard-4.scss";

// ** custom scss
import "../styles/custom/Custom.style.scss";
import "../styles/custom/CustomLib.style.scss";

// Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          sizes="512x512"
          href="/logo.png"
        />
        <link rel="shortcut icon" href="/logo.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
