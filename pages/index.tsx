import type { NextPage } from "next";
import Head from "next/head";
import ProductDetails from "components/ProductDetails";
import ProductVariations from "components/ProductVariations";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { useState, useEffect } from "react";

const title = "RTG Frontend technical assessment";

const PDP: NextPage = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('http://localhost:3000/api/product')
    .then((res) => res.json())
    .then((result) => setData(result))
    .catch((error) => alert("error"));
  }, []);
return(
  <div className="container">
  <Head>
    <title>{title}</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>

  <main className="main">
    <h1>{title}</h1>
    <section className="product">
     { data ? 
     <ProductDetails primary_image={data.primary_image}  title={data.title} sku={data.sku} ></ProductDetails>
      : 
      <Loading />
     }
    </section>
  </main>
</div>
)

};

export default PDP;
