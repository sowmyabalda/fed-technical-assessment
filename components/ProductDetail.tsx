/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState, FC } from "react";
import { Product, ErrorResponse } from "types/Product";

function isErrorResponse(json: any): json is ErrorResponse {
  return typeof json?.errorMessage === "string";
}

function isProduct(json: any): json is Product {
  return (
    typeof json?.primary_image === "string" &&
    typeof json?.sku === "string" &&
    typeof json?.title === "string" &&
    typeof json?.variations === "object"
  );
}

const useProduct = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      .then((json) => {
        if (isErrorResponse(json)) {
          setError(json.errorMessage);
        }
        if (isProduct(json)) {
          setProduct(json);
        }
      })
      .catch(() => {
        setError("Network error...");
      });
  }, []);

  return {
    product,
    error,
    loading: !error && !product,
  };
};

const ProductDetails: FC = () => {
  const { product, error, loading } = useProduct();
  return (
    <section className="product">
      {loading && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {product && (
        <>
          <div className="details">
            <img src={product.primary_image} alt={product.title} />
            <h2>{product.title}</h2>
            <h4>SKU: {product.sku}</h4>
          </div>
          <div className="variations">
            <div className="size">
              <h3>Size</h3>
              <ul>
                {product.variations.size?.map(({ variation_value, sku }) => (
                  <li key={sku}>{variation_value}</li>
                ))}
              </ul>
            </div>
            <div className="finish">
              <h3>Finish</h3>
              <ul>
                {product.variations.finish?.map(({ variation_value, sku }) => (
                  <li key={sku}>{variation_value}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default ProductDetails;
