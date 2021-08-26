import { useEffect } from "react";
import { useRouter } from "next/router";
import Navegacion from "./Navegacion";
import Head from "next/head";
import Footer from "./Footer";
import PropTypes from "prop-types";
import NProgress from "nprogress";
import nProgress from "nprogress";

const Layout = ({ children, title, nav = true, footer = true }) => {
  const router = useRouter();

  useEffect(() => {
    // barra de carga, cuando se renderiza la pagina
    const handleRouteChange = (url) => {
      console.log(url);
      NProgress.start();
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", () => NProgress.done());
    router.events.on("routeChangeError", () => nProgress.done());

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  });

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {nav && <Navegacion />}
      <main>{children}</main>
      {footer && <Footer />}
    </>
  );
};

Layout.proptypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  footer: PropTypes.bool,
  nav: PropTypes.bool,
};
export default Layout;
