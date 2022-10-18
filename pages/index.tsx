import type { NextPage } from "next";
import Head from "next/head";
import ProductDetails from "components/ProductDetails";
import ProductVariations from "components/ProductVariations";

const title = "RTG Frontend technical assessment";

const PDP: NextPage = () => (
  <div className="container">
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="main">
      <h1>{title}</h1>
      <section className="product">
        <ProductDetails />
        <ProductVariations />
      </section>
    </main>
  </div>
);

export default PDP;
