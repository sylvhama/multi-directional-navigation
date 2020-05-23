import React from "react";

import { Layout } from "./components/Layout";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { GlobalStyle } from "./components/GlobalStyle";

export function App() {
  return (
    <>
      <Layout>
        <Header />
        <Nav />
        <Main />
        <Footer />
      </Layout>
      <GlobalStyle />
    </>
  );
}
